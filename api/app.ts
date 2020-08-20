import { PrismaClient } from '@prisma/client'
import { on, schema } from 'nexus'

on.start(() => {
  /**
   * Without the Prisma plugin you need to manaully contruct your Prisma client instance.
   * With the plugin you can also still create your Prisma client instance if you need to.
   */
  const db = new PrismaClient()

  /**
   * Without the Prisma plugin you need to manually expose your Prisma client on the context.
   */
  schema.addToContext(() => {
    return { db }
  })
})
