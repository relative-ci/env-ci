const test = require('ava');
const vercel = require('../../services/vercel');

const env = {
  VERCEL: 'true',
  VERCEL_GIT_COMMIT_SHA: 'abc123',
  VERCEL_GIT_COMMIT_REF: 'master',
  VERCEL_GIT_REPO_OWNER: 'owner',
  VERCEL_GIT_REPO_SLUG: 'repo',
};

test('Push', t => {
  t.deepEqual(vercel.configuration({env}), {
    name: 'Vercel',
    service: 'vercel',
    commit: 'abc123',
    branch: 'master',
    slug: 'owner/repo',
  });
});
