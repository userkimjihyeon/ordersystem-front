import TestVue from "@/components/practice/0.TestVue.vue";
import ModelingComponent from "@/components/practice/1.ModelingComponent.vue";
import ConditionalComponent from "@/components/practice/2.ConditionalComponent.vue";

export const practiceRouter = [
        {
            // path로 사용자가 요청한 url이 들어오면, component를 보여주겠다.
            path: "/practice/test",
            name: "TestVue",
            component: TestVue
        },
        {
            path: "/practice/modeling",
            name: "ModelingComponent",
            component: ModelingComponent
        },
        {
            path: "/practice/conditional",
            name: "ConditionalComponent",
            component: ConditionalComponent
        }
]