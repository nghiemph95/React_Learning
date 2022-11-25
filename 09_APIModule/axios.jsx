/** API Module bao gồm:
 * - API files: useAPI.js, productApi.js, ...
 * - axiosClient.js (axios instance): Xử lý chung mọi thứ bao gồm add request/ response interceptor
 * để handle token, error...
 */

/** Pages/Container -> call API -> API Module -> request -> API Server ->
 * -> response -> API Module(AxiosClient.js) -> Pages
 */
