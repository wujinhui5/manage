import { routeMap } from '../../router'

function filterRoute(routes, role) {
    return routes.filter(route => {
        if (route.meta && route.meta.roles && route.meta.roles.indexOf(role) === -1) {
            return false
        }

        if (route.children) {
            route.children = filterRoute(route.children, role)
        }

        return true
    })
}


export default {
    namespaced: true,

    state: {
        addRoutes: [],
        now: 0
    },

    mutations: {
        SET_ADD_ROUTE(state, val) {
            state.addRoutes = val
        }
    },

    actions: {
        createAddRoutes({ commit }, role) {
            return new Promise((resolve) => {
                commit('SET_ADD_ROUTE', filterRoute(routeMap, role))
                resolve()
            })
        }
    }
}