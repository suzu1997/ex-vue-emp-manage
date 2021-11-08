<template>
  <div>
    <!-- ヘッダー -->
    <div class="container">
      <div class="header">
        <div class="header-left">
          <a href="login.html">
            <img class="logo" src="img/header_logo.png" />
          </a>
        </div>

        <div class="header-right">
          <a href="registerAdmin.html">管理者登録</a>
        </div>
      </div>
    </div>
    <!-- top-wrapper -->
    <div class="container">
      <div class="row register-page">
        <div class="error">{{ errorMessage }}</div>
        <form class="col s12" id="reg-form">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                required
                v-model="lastName"
              />
              <label for="last_name">姓</label>
            </div>
            <div class="input-field col s6">
              <input
                id="first_name"
                type="text"
                class="validate"
                required
                v-model="firstName"
              />
              <label for="first_name">名</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                type="email"
                class="validate"
                required
                v-model="mailAddress"
              />
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                minlength="8"
                required
                v-model="password"
              />
              <label for="password">パスワード</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <button
                class="btn btn-large btn-register waves-effect waves-light"
                v-on:click="registerAdmin"
                type="button"
              >
                登録
                <i class="material-icons right">done</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- フッター -->
    <div class="container">
      <div class="footer">
        <div class="footer-center">©️ xxx Inc.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
/**
 * 管理者登録機能を表すクラスコンポーネントです.
 */
@Component
export default class RegisterAdmin extends Vue {
  // エラーメッセージ
  private errorMessage = "";
  // 姓
  private lastName = "";
  // 名
  private firstName = "";
  // メールアドレス
  private mailAddress = "";
  // パスワード
  private password = "";

  /**
   * 管理者情報を登録する.
   *
   * @remarks
   * axios を使用して WebAPI を呼び、登録情報を送る。
   * 登録が成功すればログイン画面に遷移し、失敗すればエラーメッセージを画面に表示する。
   */
  async registerAdmin(): Promise<void> {
    const response = await axios.post(
      "http://153.127.48.168:8080/ex-emp-api/insert",
      {
        name: this.lastName + this.firstName,
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    if (response.data.status === "success") {
      this["$router"].push("/loginAdmin");
    }
    if (response.data.status === "error") {
      this.errorMessage = response.data.message;
    }
  }
}
</script>

<style></style>
