export default class TodoApi {
    static async getAll() {
        return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }

    static async save(items: any) {
        localStorage.setItem("todo-list", JSON.stringify(items));
    }
}