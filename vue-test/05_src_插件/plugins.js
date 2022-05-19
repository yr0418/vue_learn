/**
 * 该文件中只包含一个插件对象，则使用 默认暴露，方便引入
 * 一个插件对应一个文件
 */
export default {
    install(Vue, param1, param2){
        // 插件同样可以接收参数，参数来自插件使用者的传入
        console.log(param1, param2)
        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },

            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        // 给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}
