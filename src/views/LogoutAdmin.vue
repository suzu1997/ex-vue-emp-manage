<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

/**
 * ログアウトをする機能のクラスコンポーネントです.
 */
@Component
export default class LogoutAdmin extends Vue {
  created(): void {
    this.logoutAdmin();
  }
  /**
   * ログアウトをする.
   */
  async logoutAdmin(): Promise<void> {
    await axios.get("http://153.127.48.168:8080/ex-emp-api/logout");
    this["$router"].push("/loginAdmin");
  }
}
</script>
