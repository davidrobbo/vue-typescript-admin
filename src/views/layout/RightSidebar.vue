<<template>
  <div :class="[ rightMenuOpen ? 'active' : '', 'right-side-bar' ]">
    <div v-tippy title="Close Sidebar" class="top-right nav-icon" @click="updateActive">
      <i class="fa fa-sign-in"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
@Component
export default class RightSidebar extends Vue {

  @Prop({ required: true })
  rightMenuOpen: boolean;

  /**
   * Data
   */

  /**
   * Methods
   */
  @Emit('updateActive')
  updateActive (): void {}
}
</script>

<style scoped>
.right-side-bar {
  z-index: 10500;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;
  background: #21282e;
  right: -320px;
  transition: right 0.3s;
}
.right-side-bar.active {
  right: 0;
}
.top-right {
  position: absolute;
  top: 5px;
  right: 5px;
}
.nav-icon {
  padding: 16px !important;
  font-size: 20px;
  cursor: pointer;
}
.nav-icon:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  color: #fff;
}
</style>
