import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, mixin } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

// @Injectable()
// export class AuthorizeGuard implements CanActivate {

//     constructor(private reflector:Reflector){

//     }

//     canActivate(context: ExecutionContext): boolean {
//         const allowedRoles = this.reflector.get<string[]>('allowedRoles', context.getHandler());

//         if (!allowedRoles) {
//             // If no roles are defined, assume that this route is unprotected or has no specific role restrictions.
//             return true;
//         }

//         const request = context.switchToHttp().getRequest();
//         const userRoles = request?.currentUser?.roles || [];

//         const hasRole = userRoles.some((role: string) => allowedRoles.includes(role));

//         if (hasRole) return true;

//         throw new UnauthorizedException("Sorry, you are not authorized");
//     }
// }

export const AuthorizeGuard = (allowedRoles: string[]) => {
    class RolesGuardMixin implements CanActivate {
        canActivate(context: ExecutionContext): boolean {
            const request = context.switchToHttp().getRequest();
            const userRoles = request?.currentUser?.roles || [];

            const hasRole = userRoles.some((role: string) => allowedRoles.includes(role));

            if (hasRole) return true;

            throw new UnauthorizedException("Sorry, you are not authorized");
        }
    }
    const guard = mixin(RolesGuardMixin)
    return guard;
}
