// ############################################################
/**
 * Contains an interface to pass users to the UsersModel
 */
// ############################################################

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Contains an interface to hold users.
 */
export interface IUserInterface {
    v?: number;
    id?: string;
    email?: string;
    displayName?: string;
    username?: string;
    createdAt?: Date;
    modifiedAt?: Date;
}
