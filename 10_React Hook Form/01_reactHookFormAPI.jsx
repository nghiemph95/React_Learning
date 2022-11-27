/** Hook:
 * - useForm: Giúp tạo ra object form instance, trong đó sẽ cung cấp đầy đủ các phương thức
 * giúp ng dùng có thể lấy được: giá trị của form, trạng thái của form, reset hoặc set value
 *
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
