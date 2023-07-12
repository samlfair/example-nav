import * as prismic from '@prismicio/client';

const mockResponse = {
  id: 'ZK7NuxIAACIAZOtq',
  uid: null,
  url: null,
  type: 'main_nav',
  href: 'https://sam-230712-nav.cdn.prismic.io/api/v2/documents/search?ref=ZK7YfhIAACMAZR3o&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZK7NuxIAACIAZOtq%22%29+%5D%5D',
  tags: [],
  first_publication_date: '2023-07-12T15:58:55+0000',
  last_publication_date: '2023-07-12T16:44:46+0000',
  slugs: ['main-nav'],
  linked_documents: [],
  lang: 'en-us',
  alternate_languages: [],
  data: {
    logo: {
      dimensions: {
        width: 48,
        height: 48,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/sam-230712-nav/9a49e7fe-162f-41ae-b11d-28041f625128_info_FILL0_wght400_GRAD0_opsz48.png?auto=compress,format',
    },
    menu: [
      {
        submenu: {
          id: 'ZK7TuxIAACAAZQdW',
          uid: null,
          url: null,
          type: 'submenu',
          href: 'https://sam-230712-nav.cdn.prismic.io/api/v2/documents/search?ref=ZK7YfhIAACMAZR3o&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZK7TuxIAACAAZQdW%22%29+%5D%5D',
          tags: [],
          first_publication_date: '2023-07-12T16:24:30+0000',
          last_publication_date: '2023-07-12T16:24:30+0000',
          slugs: ['menu-1'],
          linked_documents: [],
          lang: 'en-us',
          alternate_languages: [],
          data: {
            submenu_title: 'Menu 1',
            link_group: [
              {
                link_label: null,
                link: {
                  id: 'ZK7OURIAACEAZO5M',
                  type: 'submenu',
                  tags: [],
                  lang: 'en-us',
                  slug: 'tincidunt',
                  first_publication_date: '2023-07-12T16:01:24+0000',
                  last_publication_date: '2023-07-12T16:01:24+0000',
                  data: {
                    submenu_title: 'Tincidunt',
                    link_group: [
                      {
                        link_label: 'Features',
                        link: {
                          id: 'ZK7MbBIAACIAZOTm',
                          type: 'page',
                          tags: [],
                          lang: 'en-us',
                          slug: 'features',
                          first_publication_date: '2023-07-12T15:53:20+0000',
                          last_publication_date: '2023-07-12T15:53:20+0000',
                          uid: 'features',
                          data: {
                            title: 'Features',
                            description: 'These are some features.',
                            icon: {
                              dimensions: {
                                width: 48,
                                height: 48,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/6a4702c0-c674-4ded-9aba-12a1633247f6_more_time_FILL0_wght400_GRAD0_opsz48.png?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                      {
                        link_label: 'Dogs',
                        link: {
                          id: 'ZK7MjRIAACMAZOWK',
                          type: 'page',
                          tags: [],
                          lang: 'en-us',
                          slug: 'dogs',
                          first_publication_date: '2023-07-12T15:53:52+0000',
                          last_publication_date: '2023-07-12T15:53:52+0000',
                          uid: 'dogs',
                          data: {
                            title: 'Dogs',
                            description: 'Dogs are animals with four legs.',
                            icon: {
                              dimensions: {
                                width: 48,
                                height: 48,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/03737fc9-88ca-434d-b034-6f29e3843288_language_FILL0_wght400_GRAD0_opsz48.png?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                      {
                        link_label: 'Cats',
                        link: {
                          id: 'ZK7MphIAACAAZOYM',
                          type: 'page',
                          tags: [],
                          lang: 'en-us',
                          slug: 'cats',
                          first_publication_date: '2023-07-12T15:54:18+0000',
                          last_publication_date: '2023-07-12T15:54:18+0000',
                          uid: 'cats',
                          data: {
                            title: 'Cats',
                            description:
                              'Cats are sassy animals with four legs.',
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                    ],
                  },
                  link_type: 'Document',
                  isBroken: false,
                },
              },
              {
                link_label: null,
                link: {
                  id: 'ZK7OgxIAACIAZO9N',
                  type: 'submenu',
                  tags: [],
                  lang: 'en-us',
                  slug: 'lobortis',
                  first_publication_date: '2023-07-12T16:02:14+0000',
                  last_publication_date: '2023-07-12T16:02:14+0000',
                  data: {
                    submenu_title: 'Lobortis',
                    link_group: [
                      {
                        link_label: 'Parrots',
                        link: {
                          id: 'ZK7MuxIAACIAZOZx',
                          type: 'page',
                          tags: [],
                          lang: 'en-us',
                          slug: 'parrots',
                          first_publication_date: '2023-07-12T15:54:39+0000',
                          last_publication_date: '2023-07-12T15:54:39+0000',
                          uid: 'parrots',
                          data: {
                            title: 'Parrots',
                            icon: {
                              dimensions: {
                                width: 48,
                                height: 48,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/707b7254-1827-4329-9253-1eb079a8279a_manage_accounts_FILL0_wght400_GRAD0_opsz48.png?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                      {
                        link_label: 'Pigs',
                        link: {
                          id: 'ZK7M1BIAACAAZObx',
                          type: 'page',
                          tags: [],
                          lang: 'en-us',
                          slug: 'pigs',
                          first_publication_date: '2023-07-12T15:55:03+0000',
                          last_publication_date: '2023-07-12T15:55:03+0000',
                          uid: 'pigs',
                          data: {
                            title: 'Pigs',
                            description: '',
                            icon: {
                              dimensions: {
                                width: 48,
                                height: 48,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/24467f9d-b73a-4850-ab19-7611b0211711_hourglass_empty_FILL0_wght400_GRAD0_opsz48.png?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                    ],
                  },
                  link_type: 'Document',
                  isBroken: false,
                },
              },
              {
                link_label: null,
                link: {
                  id: 'ZK7OtBIAACAAZO_L',
                  type: 'submenu',
                  tags: [],
                  lang: 'en-us',
                  slug: 'blog',
                  first_publication_date: '2023-07-12T16:03:06+0000',
                  last_publication_date: '2023-07-12T16:03:06+0000',
                  data: {
                    submenu_title: 'Blog',
                    link_group: [
                      {
                        link_label: null,
                        link: {
                          id: 'ZK7NTxIAACMAZOlT',
                          type: 'blog_post',
                          tags: [],
                          lang: 'en-us',
                          slug: 'ut-enim-ad-minim-veniam',
                          first_publication_date: '2023-07-12T15:57:06+0000',
                          last_publication_date: '2023-07-12T15:57:06+0000',
                          uid: 'ut-enim-ad-minim-veniam',
                          data: {
                            title: 'Ut enim ad minim veniam',
                            description:
                              'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            image: {
                              dimensions: {
                                width: 1920,
                                height: 1440,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/f551c00c-f971-449c-bb51-487a794d9e1a_omar-flores-OsF9X-MHRIo-unsplash.jpg?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                      {
                        link_label: null,
                        link: {
                          id: 'ZK7NEBIAACMAZOgX',
                          type: 'blog_post',
                          tags: [],
                          lang: 'en-us',
                          slug: 'lorem-ipsum-dolor-sit-amet',
                          first_publication_date: '2023-07-12T15:56:04+0000',
                          last_publication_date: '2023-07-12T15:56:04+0000',
                          uid: 'lorem-ipsum',
                          data: {
                            title: 'Lorem ipsum dolor sit amet',
                            description:
                              'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            image: {
                              dimensions: {
                                width: 1920,
                                height: 1302,
                              },
                              alt: null,
                              copyright: null,
                              url: 'https://images.prismic.io/sam-230712-nav/5bbe04ee-1ced-41df-bbea-f25efd042cfd_a-pril-62u95KgB49w-unsplash.jpg?auto=compress,format',
                            },
                          },
                          link_type: 'Document',
                          isBroken: false,
                        },
                      },
                    ],
                  },
                  link_type: 'Document',
                  isBroken: false,
                },
              },
            ],
          },
        },
      },
      {
        submenu: {
          id: 'ZK7TyhIAACIAZQej',
          type: 'submenu',
          tags: [],
          lang: 'en-us',
          slug: 'menu-2',
          first_publication_date: '2023-07-12T16:24:45+0000',
          last_publication_date: '2023-07-12T16:24:45+0000',
          data: {
            submenu_title: 'Menu 2',
            link_group: [
              {
                link_label: null,
                link: {
                  link_type: 'Document',
                },
              },
            ],
          },
          link_type: 'Document',
          isBroken: false,
        },
      },
      {
        submenu: {
          id: 'ZK7T1RIAACEAZQfh',
          type: 'submenu',
          tags: [],
          lang: 'en-us',
          slug: 'menu-3',
          first_publication_date: '2023-07-12T16:24:57+0000',
          last_publication_date: '2023-07-12T16:24:57+0000',
          data: {
            submenu_title: 'Menu 3',
            link_group: [
              {
                link_label: null,
                link: {
                  link_type: 'Document',
                },
              },
            ],
          },
          link_type: 'Document',
          isBroken: false,
        },
      },
    ],
    ctas: [
      {
        cta: 'Sign up',
      },
      {
        cta: 'Purchase',
      },
    ],
  },
};

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const client = prismic.createClient('sam-230712-nav');

  const submenu = await client.getByID('ZK7TuxIAACAAZQdW', {
    graphQuery: `{
      submenu {
        submenu_title
        link_group {
          link_label
          link {
            ...on submenu {
              submenu_title
              link_group {
                link_label
                link {
                  ...on page {
                    title
                    description
                    icon
                  }
                  ...on blog_post {
                    title
                    description
                    image
                  }
                }
              }
            }
          }
        }
      }
    }`,
  });

  console.log(submenu);

  return {
    nav: mockResponse,
    submenu,
  };
}
