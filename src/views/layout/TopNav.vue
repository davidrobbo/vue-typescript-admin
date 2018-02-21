<<template>
  <nav class="top-nav clearfix">
    <div class="left-nav nav-section">
      <div class="nav-item" v-if="leftMenuOpen">
        <h5>vue-type-admin</h5>
      </div>
      <div class="nav-item">
        <div @click="updateActive('left')" :class="[leftMenuOpen ? 'is-active' : '', 'hamburger hamburger--arrowturn']">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-nav nav-section">
      <div v-tippy title="Open Sidebar" class="nav-item nav-icon" @click="updateActive('right')">
        <i class="fa fa-sign-in"></i>
      </div>
      <div v-tippy title="Logout" class="nav-item nav-icon" @click="logout">
        <i class="fa fa-power-off"></i>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
@Component
export default class TopNav extends Vue {

  @Prop({ required: true })
  leftMenuOpen: boolean;

  @Prop({ required: true })
  rightMenuOpen: boolean;

  /**
   * Data
   */

  /**
   * Methods
   */
  @Emit('updateActive')
  updateActive (dir): void {}

  logout (): void { this.$router.push({ path: '/login' }) }
}
</script>

<style scoped>
.top-nav {
  background: #2b3643;
  color: #606E7F;
}
.nav-section {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.left-nav {
  float: left;
}
.right-nav {
  float: right;
}
.nav-item:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
.nav-icon {
  padding: 12px !important;
}
.nav-section > * {
  padding: 7px;
  margin: 0;
  cursor: pointer;
}
.hamburger {
  padding: 10px 5px 0 5px;
}
.hamburger-inner {
  background-color: #606E7F;
}
.hamburger-inner:before {
  background-color: #606E7F;
}
.hamburger-inner:after {
  background-color: #606E7F;
}
</style>
