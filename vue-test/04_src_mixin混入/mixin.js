/**
 * mixin，混入
 * 将 多个组件相同的配置项，例如 data、methods 抽离出来形成一个独立的 js 文件，供多个组件引入，调用 js 中的 方法、数据 等相关的配置，提高代码的复用率
 */

// 单独暴露 mixin1，引入时需要使用 {}
export const mixin1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}
