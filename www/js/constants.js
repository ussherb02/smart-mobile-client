/**
 * Created by kojo on 30/11/15.
 */
angular.module('smart.constants', [])
  .constant('ENV','dev')

  .constant('VERSION','0.0.1')

  .constant('SERVER','/smartapp')

  .constant('AUTH_EVENTS',{
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
  })

  .constant('VERIFICATION_EVENTS',{
    notVerified: 'not-verified',
    deviceVerified: 'device-verified'
  });

