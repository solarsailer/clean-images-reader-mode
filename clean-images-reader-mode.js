;(function () {
  const removeList = ['loading', 'sizes', 'srcset', 'decoding']

  function purgeImageTag(node) {
    const attributes = Array.from(node.attributes)

    attributes.forEach(attr => {
      const name = attr.name
      if (name.startsWith('data-') || removeList.includes(name)) {
        node.removeAttribute(name)
      }
    })
  }

  document.querySelectorAll('img').forEach(purgeImageTag)
})()
