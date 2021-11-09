<template> </template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "../types/employee";
import axios from "axios";

/**
 * 従業員の詳細ページ表示機能のクラスコンポーネントです.
 */
@Component
export default class EmployeeDetail extends Vue {
  // 対象の従業員オブジェクト
  private currentEmployee!: Employee;
  // エラーメッセージ
  private errorMessage = "";
  // 対象の従業員の image パス
  private currentEmployeeImage = "";
  // 対象の従業員の扶養人数
  private currentDependentsCount = 0;

  /**
   * VuexストアのGetter経由で受け取ったリクエストパラメータのIDから1件の従業員情報を取得.
   */
  created(): void {
    const employeeId = parseInt(this["$route"].params.id);
    this.currentEmployee = this["$store"].getters.getEmployeeById(employeeId);
    this.currentEmployeeImage = `http://xxx.xxx.xxx.xxx:8080/ex-emp-api/img/${this.currentEmployee.image}`;
    this.currentDependentsCount = this.currentEmployee.dependentsCount;
  }
}
</script>

<style></style>
