<<template>
  <nav class="sidebar">
    <Menu/>
  </nav>
</template>
<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import Menu from './SideBarMenu';
@Component({ components: { Menu } })
export default class SideBar extends Vue {

  /**
   * Data
   */

  /**
   * Methods
   */
}
</script>

<style>
.sidebar {
  background: #364150;
}
</style>
