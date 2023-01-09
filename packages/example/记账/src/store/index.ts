import Vue from 'vue'
import Vuex from 'vuex'

import clone from "@/lib/clone";
import createId from '@/lib/createId'
import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
    isCreateTagVisible: false
  } as RootState,
  mutations: {
    setCreateTagVisible(state, status) {
      state.isCreateTagVisible = status
    },
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter((tag) => tag.id === id)[0];
    },
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem('tagList') || '[]'
      )
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣')
        store.commit('createTag', '食')
        store.commit('createTag', '住')
        store.commit('createTag', '行')
      }
    },
    createTag (state, name) {
      const id = createId().toString()
      state.tagList.push({
        id,
        name
      })
      store.commit('saveTags')
    },
    updateTag (state, name) {
      if (state.currentTag) {
        state.currentTag.name = name
      }
    },
    saveTag(state) {
      if (state.currentTag) {
        const { id, name } = state.currentTag
        const idList = state.tagList.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
          if (state.tagList.filter(item => item.name === name).length > 1) {
            window.alert('标签名重复了')
          } else {
            const tag = state.tagList.filter(item => item.id === id)[0]
            tag.name = name
            store.commit('saveTags')
            window.alert('保存成功')
            router.back()
          }
        }
      }
    },
    removeTag (state) {
      if (state.currentTag) {
        let index = -1
        for (let i = 0; i < state.tagList.length; i++) {
          if (state.tagList[i].id === state.currentTag.id) {
            index = i;
            break;
          }
        }
        if (index >= 0) {
          state.tagList.splice(index, 1)
          store.commit('saveTags')
          window.alert('删除成功')
          router.back()
        } else {
          window.alert('删除失败')
        }
      }
    },
    saveTags (state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || "[]"
      ) as RecordItem[];
    },
    createRecord (state, record: RecordItem) {
      const recordCopy = clone(record);
      recordCopy.createdAt = new Date().toISOString();
      state.recordList.push(recordCopy);
      store.commit('saveRecords')
    },
    saveRecords (state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store