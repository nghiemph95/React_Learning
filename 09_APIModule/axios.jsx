/** API Module bao gồm:
 * - API files: useAPI.js, productApi.js, ...
 * - axiosClient.js (axios instance): Xử lý chung mọi thứ bao gồm add request/ response interceptor
 * để handle token, error...
 */

/** Pages/Container -> call API -> API Module -> request -> API Server ->
 * -> response -> API Module(AxiosClient.js) -> Pages
 */

/**  Axios là một thư viện HTTP Client dựa trên Promise.
 * Cơ bản thì nó cung cấp một API cho việc xử lý XHR (XMLHttpRequests)
 * */
