
module.exports = {
  pathPrefix: '/',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-oss-docs',
      options: {
        root: __dirname,
        subtitle: 'npm install analytics',
        description: 'How to use the analytics npm module',
        githubRepo: 'davidwells/analytics',
        spectrumPath: 'analytics',
        sidebarCategories: {
          null: [
            'tutorials/getting-started',
          ],
          Docs: [
            'api',
            'lifecycle',
            'plugins/index',
            'using-listeners',
            'debugging',
            'plugins/writing-plugins',
          ],
          Plugins: [
            'plugins/google-analytics',
            'plugins/google-tag-manager',
            'plugins/segment',
            'plugins/customerio',
            'plugins/hubspot',
            'plugins/fullstory',
            'plugins/crazyegg',
            'plugins/gosquared',
            'plugins/simple-analytics',
            'plugins/do-not-track',
            'plugins/tab-events',
            'plugins/window-events',
            'plugins/original-source',
            'plugins/event-validation',
            'plugins/request',
          ],
          Utilities: [
            'utils/cookies',
            'utils/forms',
          ],
          Tutorials: [
            'tutorials/getting-started',
            'tutorials/handling-campaign-url-parameters',
            'tutorials/enriching-data',
            'tutorials/using-reset',
          ],
          Resources: [
            'resources/faq',
            '[Github Repo](https://github.com/davidwells/analytics)',
          ],
        }
      }
    }
  ]
}
