import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Employee } from "../types/employee";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 従業員数
    totalEmployeeCount: 0,
    // 従業員一覧
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /**
     * 従業員一覧情報を取得.
     *
     * @remarks
     * 従業員一覧情報を WebAPI から取得 して mutation を呼び出す
     *
     * @param context - コンテキストオブジェクト
     */
    async getEmployeeList(context) {
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      const payload = response.data;
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員一覧情報を作成してstateに格納.
     *
     * @param state - stateオブジェクト
     * @param payload - WebAPI から取得した JSON
     */
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.totalEmployeeCount;
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  getters: {
    /**
     * 従業員数を返す.
     *
     * @param state - stateオブジェクト
     * @return 従業員数
     */
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
    },
    /**
     * 従業員一覧を返す.
     *
     * @param state - stateオブジェクト
     * @return 従業員一覧情報
     */
    getEmployees(state) {
      return state.employees;
    },
    /**
     * ID から従業員を検索し返す.
     *
     * @param state - stateオブジェクト
     * @return 渡された ID で絞り込んだ Employee オブジェクト
     */
    getEmployeeById(state) {
      return (id: number) => {
        return state.employees.filter(employee => employee.id === id)[0];
      };
    },
  }, // end getters
  modules: {}, // end modules
});
