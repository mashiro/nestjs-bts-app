import { MiddlewareFn } from 'type-graphql'
import { GqlContext } from '../graphql.context'

const DataLoaderMiddleware: MiddlewareFn<GqlContext> = ({ context }, next) => {
  return next()
}
