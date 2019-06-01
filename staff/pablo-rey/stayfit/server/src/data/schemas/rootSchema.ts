import { buildSchema } from 'type-graphql';
import { LoginResolver } from '../../logic/resolvers/auth/login';
import { InvalidateCredentialsResolver } from '../../logic/resolvers/auth/invalidate-credentials';
import { CreateSessionTypeResolver } from '../../logic/resolvers/session-type/create-session-type';
import { CreateUserResolver } from '../../logic/resolvers/users/create-user';
import { ListUsersResolvers } from '../../logic/resolvers/users/list-users';
import { CreateProviderResolver } from '../../logic/resolvers/providers/create-provider';
import { UpdateProviderAdminsResolver } from '../../logic/resolvers/providers/update-admins';
import { authChecker } from '../../logic/middleware/authChecker';
import { UpdateProviderCoachesResolver } from '../../logic/resolvers/providers/update-coaches';
import { AddProviderCustomerResolver } from '../../logic/resolvers/providers/add-customer';
import { RemoveProviderCustomerResolver } from '../../logic/resolvers/providers/remove-customer';
import { RetrieveUserResolver } from '../../logic/resolvers/users/retrieve-user';
import { ListProvidersResolver } from '../../logic/resolvers/providers/list-providers';
import { CreateSessionsResolver } from '../../logic/resolvers/sessions/create-session/create-session';
import { CreateSessionsInput } from '../../logic/resolvers/sessions/create-session/create-session';
import { ListSessionsByUserResolvers } from '../../logic/resolvers/sessions/list-sessions/list-sessions-by-user';
import { AttendSessionResolvers, AttendanceInput } from '../../logic/resolvers/sessions/attend-session/attend-session';

export async function createSchema() {
  return await buildSchema({
    resolvers: [
      CreateSessionTypeResolver,
      CreateSessionsResolver,
      CreateSessionsInput,
      ListSessionsByUserResolvers,
      AttendSessionResolvers,
      AttendanceInput,
      LoginResolver,
      InvalidateCredentialsResolver,
      CreateUserResolver,
      RetrieveUserResolver,
      ListUsersResolvers,
      CreateProviderResolver,
      UpdateProviderAdminsResolver,
      UpdateProviderCoachesResolver,
      AddProviderCustomerResolver,
      RemoveProviderCustomerResolver,
      ListProvidersResolver
    ],
    authChecker: authChecker,
  });
}
