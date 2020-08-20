import * as Prisma from '@prisma/client'
import { on, schema } from 'nexus'

/**
 * Without the Prisma plugin you need to manually expose Prisma types into your backing types.
 */

// todo https://github.com/graphql-nexus/nexus/issues/473#issuecomment-665171477
export type User = Prisma.User
export type Post = Prisma.Post
export type Profile = Prisma.Profile

on.start(() => {
  /**
   * Without the Prisma plugin you need to manaully contruct your Prisma client instance.
   * With the plugin you can also still create your Prisma client instance if you need to.
   */
  const db = new Prisma.PrismaClient()

  /**
   * Without the Prisma plugin you need to manually expose your Prisma client on the context.
   */
  schema.addToContext(() => {
    return { db }
  })
})
