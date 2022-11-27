/** Hook:
 * - useForm: Giúp tạo ra object form instance, trong đó sẽ cung cấp đầy đủ các phương thức
 * giúp ng dùng có thể lấy được: giá trị của form, trạng thái của form, reset hoặc set value
 * - Khi gọi useForm nó sẽ trả về một số hàm gồm:
 * + register
 * + unregister
 * + error
 * + watch: hay dùng
 * + handleSubmit: hay dùng
 * + reset
 * + setError
 * + clearErrors
 * + setValue: hay dùng
 * + getValues: hay dùng
 * + trigger
 * + control
 * + formState
 */

/** Ví dụ: */
const { register } = useForm({
  mode: "onSubmit",
  reValidateMode: "onChange",
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: true,
});

/** onSubmit: Nó chỉ validation khi form đc submit hoặc input bị invalid */
/** defaultValue: Giá trị mặc đinh, giá trị khởi tạo của form */
/** resolver: Để truyền vô cho nó 1 thằng validation resolver ví dụ như Yup */

/** Controller: Định nghĩa form control (Giúp tư động bind vào các sự kiện trong các UI control)*/

/** ErrorMesssage: Show errorMessage khi cần thiết(Mỗi lần có lỗi , cần show lỗi trên form, khi nào mình muốn nó có lỗi mới show, con
 * còn ko thì thôi)
 */
