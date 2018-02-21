<<template>
  <div style="position: relative;">
    <TopNav style="z-index:9999;" :leftMenuOpen="leftOpen" :rightMenuOpen="rightOpen" @updateActive="updateActive" />
    <SideBar style="z-index:9998;" :class="[leftOpen ? 'active' : '', 'left-draw']"/>
    <RightSidebar :rightMenuOpen="rightOpen" @updateActive="updateActive('right')"/>
    <div :class="[leftOpen ? 'squish' : '', 'router-view']">
      <el-breadcrumb separator="/" style="padding: 15px; border-bottom:1px solid #e7ecf1;">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.name !== 'Dashboard'">
          {{ $route.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div style="background: #eff1f5;text-align:left; padding: 5px 10px;">
        <h3>{{ $route.name }} <small>{{ $route.meta.description }}</small></h3> 
      </div>
      <router-view style="min-height:85vh; background: #eff1f5;">
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from './TopNav';
import SideBar from './SideBar';
import RightSidebar from './RightSidebar';
@Component({ components: { TopNav, SideBar, RightSidebar } })
export default class Layout extends Vue {

  /**
   * Data
   */
   leftOpen: boolean;
   rightOpen: boolean;

   constructor () {
     super();
     this.leftOpen = false;
     this.rightOpen = false
   }

  /**
   * Methods
   */
   updateActive (dir): void {

     switch (dir) {
       case 'left':
         this.leftOpen = !this.leftOpen;
         break;
       case 'right':
         this.rightOpen = !this.rightOpen;
         break;
     }
   }

}
</script>

<style>
.left-draw {
  position: absolute;
  top: 55px;
  bottom: 0;
  left: -250px;
  width: 250px;
  min-height: 100%;
  transition: all 0.5s ease;
}
.left-draw.active {
  left: 0;
}
.router-view {
  transition: all 0.5s ease;
}
.wrapper {
  overflow-x: hidden;
  position: relative;
}
@media screen and (max-width: 768px) {
  .router-view.squish {
    transform: translate(250px, 0);
  }
}
@media screen and (min-width: 769px) {
  .router-view.squish {
    margin-left: 250px;
  }
}
</style>
