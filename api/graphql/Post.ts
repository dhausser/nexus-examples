import { schema } from 'nexus'

schema.objectType({
  name: 'Post', // <- Name of your type
  definition(t) {
    t.int('id') // <- Field named `id` of type `Int`
    t.string('title') // <- Field named `title` of type `String`
    t.string('body') // <- Field named `body` of type `String`
    t.boolean('published') // <- Field named `published` of type `Boolean`
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.list.field('drafts', {
      type: 'Post',
      resolve(_root, _args, ctx) {
        return ctx.db.post.findMany({ where: { published: false } })
      },
    })
  },
})
