<<template>
  <nav :class="[ menuOpen ? 'active' : '', 'floating-nav' ]">
    <div class="trigger">
      <div @click="updateActive" :class="[menuOpen ? 'is-active' : '', 'hamburger hamburger--slider']">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
      <div class="drop-down" v-if="menuOpen">
        <div>A</div>
        <div>A</div>
        <div>A</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
@Component
export default class FloatingMenu extends Vue {

  menuOpen: boolean;

  constructor () {
    super();
    this.menuOpen = false;
  }

  /**
   * Data
   */

  /**
   * Methods
   */
  updateActive (): void {
    this.menuOpen = !this.menuOpen;
  }
}
</script>

<style scoped>
.floating-nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.floating-nav.active {
  background: rgba(0,0,0,0.8);
  z-index: 9999;
}
.floating-nav .trigger {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #63c4d1;
  position: fixed;
  top: 70px;
  right: 10px;
  cursor: pointer;
}
.drop-down {
  background: #63c4d1;
  position: relative;
}
.drop-down:before {
  content: '';
  position: absolute;
  top: -30px;
  height: 30px;
  left: 0;
  width: 60px;
  background: #63c4d1;
  z-index: -1;
}
.drop-down:after {
  content: '';
  position: absolute;
  top: 55%;
  height: 50px;
  left: 0;
  width: 60px;
  background: #63c4d1;
  z-index: -1;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.hamburger {
  padding: 17px 10px;
}
.hamburger-inner {
  background-color: #fff;
}
.hamburger-inner:before {
  background-color: #fff;
}
.hamburger-inner:after {
  background-color: #fff;
}
</style>
