// 保存数据的属性state
// export const state={
//     // 用户信息
//     userInfo:{
//         token:'',
//         user:{
//             nickname:'一拳超人'
//         }
//     }
// }

// 保存数据的属性state
// 如果不使用函数的方式会报警告
export const state = () => {
    return {
        userInfo: {
            token: '',
            user: {

            }
        }
    }
}


// 同步修改数据 mutations
export const mutations = {
    //   state就是上面的state,这个参数是固定默认的
    // data使用调用该方法时候传入的数据
    setUserInfo(state, data) {
        state.userInfo = data;
    },

    //   清除用户数据
    cleanUserInfo(state, info) {
        if (process.browser) {
            localStorage.removeItem("userInfo");
        }
        state.userInfo = {};
    }
}

// 异步修改数据actions
export const actions = {
    // 登录
    login({ commit }, data) {
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
}