<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{ active: tab === 'your_feed' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                >
                  Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                class="nav-link"
                exact
                :class="{ active: tab === 'global_feed' }"
                :to="{
                  name: 'home',
                  query: {
                    tab: 'global_feed'
                  }
                }">
                  Global Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                class="nav-link"
                exact
                :class="{ active: tab === 'tag' }"
                :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: tag
                  }
                }">
                  #{{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | FormatDate('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                :disabled="article.favoriteDisabled"
                @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name: 'article',
                params: {
                  slug: article.slug
                }
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.decription }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                v-for="item in tags"
                :key="item"
                :to="{
                  name: 'home',
                  query: {
                    tag: item,
                    tab: 'tag'
                  }
                }"
              >
                {{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

</div>

</template>

<script>
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from '../../api/article'
import { getTags } from '../../api/tag'
import { mapState } from 'vuex'
export default {
  name: 'home',
  // watchQuery: 监听路由中的查询参数，查询参数变化，则会重新渲染页面。
  // 如果不通过此方法监听查询参数，即便查询参数改变，页面也不会重新渲染
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData({ query, store }) {
    const { tag } = query
    const tab = query.tab || 'global_feed'
    const page = parseInt(query.page) || 1
    const limit = 20
    const loadArticles = store.state.user && tab === 'your_feed'
                         ? getFeedArticles
                         : getArticles

    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag: tag
      }),
      getTags()
    ])
    const { articles, articlesCount } = articleRes.data
    // 增加点赞按钮的状态
    articles.forEach(article => {
      article.favoriteDisabled = false
    });

    const { tags } = tagRes.data
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags,
      tag,
      tab
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    console.log('articles',  this.articles)
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        // 增加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>