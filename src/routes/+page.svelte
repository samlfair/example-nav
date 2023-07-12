<script>
  import { PrismicImage, PrismicLink } from "@prismicio/svelte"
  import * as prismic from "@prismicio/client"

  export let data
</script>

<header>

  <nav>
    <div class="logo">
      <PrismicImage field={data.nav.data.logo} />
    </div>
    <ul class="first links">
      {#each data.nav.data.menu as item}
      <li>{item.submenu.data.submenu_title}</li>
      {/each}
    </ul>
    <ul class="first buttons">
      {#each data.nav.data.ctas as cta}
      <li><button>{cta.cta}</button></li>
      {/each}
    </ul>
  </nav>
  <ul class="second">
    {#each data.nav.data.menu[0].submenu.data.link_group as link}
    <li>
      <ul class="third">
        <li class="column-title">{link.link.data.submenu_title}</li>
        {#each link.link.data.link_group as link}
          {#if link.link.type === "page"}
            <li class="page" class:filled={prismic.isFilled.richText(link.link.data.description)}>
              <strong>
                {#if link.link.data.icon}
                  <PrismicImage field={link.link.data.icon} />
                {/if}
                {link.link_label || link.link.data.title}
              </strong>
              {#if link.link.data.description}
                <p>{link.link.data.description}</p>
              {/if}
            </li>
          {/if}
          {#if link.link.type === "blog_post"}
            <li class="blog-post">
              <PrismicImage field={link.link.data.image} />
              <strong>
                {link.link_label || link.link.data.title}
              </strong>
            </li>
          {/if}
        {/each}
      </ul>
    </li>
    {/each}
  </ul>
</header>

<style>
  header {
    max-width: 720px;
    padding: 20px;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: #eee;
    min-height: 90vh;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }

  .logo {
    flex-grow: 1;
  }

  .logo :global(img) {
    height: 2em;
    width: auto;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .first {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .first.links li {
    padding: 10px;
  }

  .first.links :first-child {
    font-weight: bold;
    border: 1px solid black;
    border-bottom: none;
    z-index: 1;
    box-shadow: 0 1px white;
    background: white;
  }

  .first.buttons {
    gap: 1em;
  }

  .second {
    border: 1px solid black;
    background: white;
    padding: 1em;
    gap: 1em;
    display: flex;
    flex-direction: row;
  }

  .second > * {
    flex: 1;
  }

  .third {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .column-title {
    font-weight: bold;
  }

  .page {
    border-radius: 5px;
    padding: 10px;
  }
  
  .page.filled {
    border: 1px solid black;
  }

  .page:hover {
    background: lightgrey;
  }

  .page strong {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }

  .page:not(.filled) strong {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .page :global(img) {
    height: 1.5em;
    width: auto;
  }

  .blog-post :global(img) {
    max-width: 100%;
    height: auto;
  }

  .blog-post:hover {
    filter: contrast(0.8) saturate(0.8);
    color: #444;
  }
</style>