<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <a
      :href="'https://simlessly.com'"
      class="home-link">
      <img
        class="logo"
        v-if="$themeConfig.logo"
        :src="$withBase($themeConfig.logo)"
        >
    </a>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}">
      <NavLinks class="can-hide"/>
      <Mode />
    </div>
    <div style="float: right;">
    <button @click="handleUrl">Console</button>
      
    </div>
    <div style="float: right;">
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"/>
      <SearchBox v-else-if="$themeConfig.search !== false && $frontmatter.search !== false"/>
    </div>
  </header>
</template>



<script>
import { defineComponent, ref, onMounted, computed } from 'vue-demi'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton'
import NavLinks from '@theme/components/NavLinks'
import Mode from '@theme/components/Mode'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },

  setup (props, ctx) {
    const instance = useInstance()
    const linksWrapMaxWidth = ref(null)

    const algolia = computed(() => {
      return instance.$themeLocaleConfig.algolia || instance.$themeConfig.algolia || {}
    })

    const isAlgoliaSearch = computed(() => {
      algolia.value && algolia.value.apiKey && algolia.value.indexName
    })

    

    function css (el, property) {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const win = el.ownerDocument.defaultView
      // null means not to return pseudo styles
      return win.getComputedStyle(el, null)[property]
    }

    const handleUrl = () => {
      window.open('https://rsp.simlessly.com/', '_blank')
    }

    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
      const NAVBAR_VERTICAL_PADDING =
        parseInt(css(instance.$el, 'paddingLeft')) +
        parseInt(css(instance.$el, 'paddingRight')) + 
        300

      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapMaxWidth.value = null
        } else {
          linksWrapMaxWidth.value =
            instance.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            (instance.$refs.siteName && instance.$refs.siteName.offsetWidth || 0)
        }
      }

      handleLinksWrapWidth()
      window.addEventListener('resize', handleLinksWrapWidth, false)
    })

    return { linksWrapMaxWidth, algolia, isAlgoliaSearch, css, handleUrl }
  }
})
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

button
  width: 100px;
  height: 40px;
  background: #2f6ff9;
  border: none;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  position: relative;
  z-index: 0;
button:hover
  border:1px solid #2f6ff9;
  background: #fff;
  color: #2f6ff9;

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  box-shadow var(--box-shadow)
  background var(--background-color)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.2rem
    font-weight 600
    color var(--text-color)
    position relative
  .links
    padding-left 1.5rem
    left 200px
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    background-color var(--background-color)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>
