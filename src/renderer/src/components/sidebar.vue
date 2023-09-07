<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
// const menu = [
//   { header: 'Tasks' },
//   { href: '/', name: 'Home', icon: { class: 'pi pi-user' } },
//   { href: '/charts', name: 'Charts', icon: { class: 'pi pi-chart-bar' } },
//   { href: '/about', name: 'Charts', icon: { class: 'pi pi-chart-bar' } }
// ]

export default {
  data() {
    return {
      menu: [
        { header: 'Main Navigation', hiddenOnCollapse: true },
        { href: '/', title: 'Dashboard', icon: 'pi pi-user' },
        { href: '/first', title: 'first' },
        { href: '/second', title: 'second' },
        { href: '/third', title: 'third' },

        { href: '/about', title: 'Charts', icon: 'pi pi-chart-bar' }

      ]
    }
  }
}
</script>
