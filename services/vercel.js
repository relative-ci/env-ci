// https://vercel.com/docs/environment-variables

module.exports = {
  detect({env}) {
    return Boolean(env.VERCEL);
  },
  configuration({env}) {
    return {
      name: 'Vercel',
      service: 'vercel',
      commit: env.VERCEL_GIT_COMMIT_SHA,
      branch: env.VERCEL_GIT_COMMIT_REF,
      slug: `${env.VERCEL_GIT_REPO_OWNER}/${env.VERCEL_GIT_REPO_SLUG}`,
    };
  },
};
