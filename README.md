# Bookmarklet: clean-images-reader-mode

Fix broken images while using Safari Reader and print to PDF.

## Install

### Embed on a webpage

Bookmarklet link (it does not work on GitHub's preview):

```
<a
  href="javascript:%20(function()%7Bconst%20h=%5B%22loading%22,%22sizes%22,%22srcset%22,%22decoding%22%5D;function%20u(f)%7BArray.from(f.attributes).forEach((E)=%3E%7Bconst%20c=E.name;if(c.startsWith(%22data-%22)%7C%7Ch.includes(c))f.removeAttribute(c)%7D)%7Ddocument.querySelectorAll(%22img%22).forEach(u)%7D)();"
>
  Clean Images for Reader Mode
</a>
```

### Create manually

Create a new bookmark in a browser and change its address by the output of the `build_bookmarklet` script.
