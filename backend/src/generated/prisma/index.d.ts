
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ExpenseParticipant
 * 
 */
export type ExpenseParticipant = $Result.DefaultSelection<Prisma.$ExpenseParticipantPayload>
/**
 * Model Settlement
 * 
 */
export type Settlement = $Result.DefaultSelection<Prisma.$SettlementPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model OwnershipTransfer
 * 
 */
export type OwnershipTransfer = $Result.DefaultSelection<Prisma.$OwnershipTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  GOOGLE: 'GOOGLE',
  PHONE: 'PHONE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const SplitType: {
  EQUAL: 'EQUAL',
  UNEQUAL: 'UNEQUAL',
  PERCENTAGE: 'PERCENTAGE',
  SHARE: 'SHARE'
};

export type SplitType = (typeof SplitType)[keyof typeof SplitType]


export const OwnershipTransferStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type OwnershipTransferStatus = (typeof OwnershipTransferStatus)[keyof typeof OwnershipTransferStatus]


export const ActivityType: {
  EXPENSE_CREATED: 'EXPENSE_CREATED',
  EXPENSE_UPDATED: 'EXPENSE_UPDATED',
  EXPENSE_DELETED: 'EXPENSE_DELETED',
  SETTLEMENT_CREATED: 'SETTLEMENT_CREATED',
  MEMBER_ADDED: 'MEMBER_ADDED',
  MEMBER_REMOVED: 'MEMBER_REMOVED',
  GROUP_RENAMED: 'GROUP_RENAMED',
  OWNERSHIP_TRANSFERRED: 'OWNERSHIP_TRANSFERRED',
  GROUP_DELETED: 'GROUP_DELETED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type SplitType = $Enums.SplitType

export const SplitType: typeof $Enums.SplitType

export type OwnershipTransferStatus = $Enums.OwnershipTransferStatus

export const OwnershipTransferStatus: typeof $Enums.OwnershipTransferStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseParticipant`: Exposes CRUD operations for the **ExpenseParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseParticipants
    * const expenseParticipants = await prisma.expenseParticipant.findMany()
    * ```
    */
  get expenseParticipant(): Prisma.ExpenseParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlement`: Exposes CRUD operations for the **Settlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlement.findMany()
    * ```
    */
  get settlement(): Prisma.SettlementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownershipTransfer`: Exposes CRUD operations for the **OwnershipTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnershipTransfers
    * const ownershipTransfers = await prisma.ownershipTransfer.findMany()
    * ```
    */
  get ownershipTransfer(): Prisma.OwnershipTransferDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Friendship: 'Friendship',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Expense: 'Expense',
    ExpenseParticipant: 'ExpenseParticipant',
    Settlement: 'Settlement',
    Activity: 'Activity',
    OwnershipTransfer: 'OwnershipTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "friendship" | "group" | "groupMember" | "expense" | "expenseParticipant" | "settlement" | "activity" | "ownershipTransfer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ExpenseParticipant: {
        payload: Prisma.$ExpenseParticipantPayload<ExtArgs>
        fields: Prisma.ExpenseParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findFirst: {
            args: Prisma.ExpenseParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findMany: {
            args: Prisma.ExpenseParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          create: {
            args: Prisma.ExpenseParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          createMany: {
            args: Prisma.ExpenseParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          delete: {
            args: Prisma.ExpenseParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          update: {
            args: Prisma.ExpenseParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          aggregate: {
            args: Prisma.ExpenseParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseParticipant>
          }
          groupBy: {
            args: Prisma.ExpenseParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantCountAggregateOutputType> | number
          }
        }
      }
      Settlement: {
        payload: Prisma.$SettlementPayload<ExtArgs>
        fields: Prisma.SettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findFirst: {
            args: Prisma.SettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findMany: {
            args: Prisma.SettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          create: {
            args: Prisma.SettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          createMany: {
            args: Prisma.SettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          delete: {
            args: Prisma.SettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          update: {
            args: Prisma.SettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          deleteMany: {
            args: Prisma.SettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettlementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          upsert: {
            args: Prisma.SettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          aggregate: {
            args: Prisma.SettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlement>
          }
          groupBy: {
            args: Prisma.SettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      OwnershipTransfer: {
        payload: Prisma.$OwnershipTransferPayload<ExtArgs>
        fields: Prisma.OwnershipTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnershipTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnershipTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          findFirst: {
            args: Prisma.OwnershipTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnershipTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          findMany: {
            args: Prisma.OwnershipTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>[]
          }
          create: {
            args: Prisma.OwnershipTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          createMany: {
            args: Prisma.OwnershipTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnershipTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>[]
          }
          delete: {
            args: Prisma.OwnershipTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          update: {
            args: Prisma.OwnershipTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          deleteMany: {
            args: Prisma.OwnershipTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnershipTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnershipTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>[]
          }
          upsert: {
            args: Prisma.OwnershipTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnershipTransferPayload>
          }
          aggregate: {
            args: Prisma.OwnershipTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnershipTransfer>
          }
          groupBy: {
            args: Prisma.OwnershipTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnershipTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnershipTransferCountArgs<ExtArgs>
            result: $Utils.Optional<OwnershipTransferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    friendship?: FriendshipOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    expense?: ExpenseOmit
    expenseParticipant?: ExpenseParticipantOmit
    settlement?: SettlementOmit
    activity?: ActivityOmit
    ownershipTransfer?: OwnershipTransferOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedGroups: number
    groupMemberships: number
    createdExpenses: number
    paidExpenses: number
    expenseParticipations: number
    settlementsPaid: number
    settlementsReceived: number
    activities: number
    friendshipsAsUser1: number
    friendshipsAsUser2: number
    ownershipTransfersStarted: number
    ownershipTransfersReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs
    groupMemberships?: boolean | UserCountOutputTypeCountGroupMembershipsArgs
    createdExpenses?: boolean | UserCountOutputTypeCountCreatedExpensesArgs
    paidExpenses?: boolean | UserCountOutputTypeCountPaidExpensesArgs
    expenseParticipations?: boolean | UserCountOutputTypeCountExpenseParticipationsArgs
    settlementsPaid?: boolean | UserCountOutputTypeCountSettlementsPaidArgs
    settlementsReceived?: boolean | UserCountOutputTypeCountSettlementsReceivedArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    friendshipsAsUser1?: boolean | UserCountOutputTypeCountFriendshipsAsUser1Args
    friendshipsAsUser2?: boolean | UserCountOutputTypeCountFriendshipsAsUser2Args
    ownershipTransfersStarted?: boolean | UserCountOutputTypeCountOwnershipTransfersStartedArgs
    ownershipTransfersReceived?: boolean | UserCountOutputTypeCountOwnershipTransfersReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpenseParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendshipsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendshipsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnershipTransfersStartedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnershipTransfersReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipTransferWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    expenses: number
    settlements: number
    activities: number
    ownershipTransfers: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    expenses?: boolean | GroupCountOutputTypeCountExpensesArgs
    settlements?: boolean | GroupCountOutputTypeCountSettlementsArgs
    activities?: boolean | GroupCountOutputTypeCountActivitiesArgs
    ownershipTransfers?: boolean | GroupCountOutputTypeCountOwnershipTransfersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountOwnershipTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipTransferWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    participants: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ExpenseCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    username: string | null
    profilePhotoUrl: string | null
    authProvider: $Enums.AuthProvider | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    username: string | null
    profilePhotoUrl: string | null
    authProvider: $Enums.AuthProvider | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phoneNumber: number
    username: number
    profilePhotoUrl: number
    authProvider: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    username?: true
    profilePhotoUrl?: true
    authProvider?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    username?: true
    profilePhotoUrl?: true
    authProvider?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    username?: true
    profilePhotoUrl?: true
    authProvider?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phoneNumber: string
    username: string | null
    profilePhotoUrl: string | null
    authProvider: $Enums.AuthProvider
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    username?: boolean
    profilePhotoUrl?: boolean
    authProvider?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    createdExpenses?: boolean | User$createdExpensesArgs<ExtArgs>
    paidExpenses?: boolean | User$paidExpensesArgs<ExtArgs>
    expenseParticipations?: boolean | User$expenseParticipationsArgs<ExtArgs>
    settlementsPaid?: boolean | User$settlementsPaidArgs<ExtArgs>
    settlementsReceived?: boolean | User$settlementsReceivedArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    friendshipsAsUser1?: boolean | User$friendshipsAsUser1Args<ExtArgs>
    friendshipsAsUser2?: boolean | User$friendshipsAsUser2Args<ExtArgs>
    ownershipTransfersStarted?: boolean | User$ownershipTransfersStartedArgs<ExtArgs>
    ownershipTransfersReceived?: boolean | User$ownershipTransfersReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    username?: boolean
    profilePhotoUrl?: boolean
    authProvider?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    username?: boolean
    profilePhotoUrl?: boolean
    authProvider?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    username?: boolean
    profilePhotoUrl?: boolean
    authProvider?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phoneNumber" | "username" | "profilePhotoUrl" | "authProvider" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    createdExpenses?: boolean | User$createdExpensesArgs<ExtArgs>
    paidExpenses?: boolean | User$paidExpensesArgs<ExtArgs>
    expenseParticipations?: boolean | User$expenseParticipationsArgs<ExtArgs>
    settlementsPaid?: boolean | User$settlementsPaidArgs<ExtArgs>
    settlementsReceived?: boolean | User$settlementsReceivedArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    friendshipsAsUser1?: boolean | User$friendshipsAsUser1Args<ExtArgs>
    friendshipsAsUser2?: boolean | User$friendshipsAsUser2Args<ExtArgs>
    ownershipTransfersStarted?: boolean | User$ownershipTransfersStartedArgs<ExtArgs>
    ownershipTransfersReceived?: boolean | User$ownershipTransfersReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedGroups: Prisma.$GroupPayload<ExtArgs>[]
      groupMemberships: Prisma.$GroupMemberPayload<ExtArgs>[]
      createdExpenses: Prisma.$ExpensePayload<ExtArgs>[]
      paidExpenses: Prisma.$ExpensePayload<ExtArgs>[]
      expenseParticipations: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
      settlementsPaid: Prisma.$SettlementPayload<ExtArgs>[]
      settlementsReceived: Prisma.$SettlementPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      friendshipsAsUser1: Prisma.$FriendshipPayload<ExtArgs>[]
      friendshipsAsUser2: Prisma.$FriendshipPayload<ExtArgs>[]
      ownershipTransfersStarted: Prisma.$OwnershipTransferPayload<ExtArgs>[]
      ownershipTransfersReceived: Prisma.$OwnershipTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phoneNumber: string
      username: string | null
      profilePhotoUrl: string | null
      authProvider: $Enums.AuthProvider
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedGroups<T extends User$ownedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMemberships<T extends User$groupMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdExpenses<T extends User$createdExpensesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paidExpenses<T extends User$paidExpensesArgs<ExtArgs> = {}>(args?: Subset<T, User$paidExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenseParticipations<T extends User$expenseParticipationsArgs<ExtArgs> = {}>(args?: Subset<T, User$expenseParticipationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsPaid<T extends User$settlementsPaidArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsPaidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsReceived<T extends User$settlementsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendshipsAsUser1<T extends User$friendshipsAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$friendshipsAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendshipsAsUser2<T extends User$friendshipsAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$friendshipsAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownershipTransfersStarted<T extends User$ownershipTransfersStartedArgs<ExtArgs> = {}>(args?: Subset<T, User$ownershipTransfersStartedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownershipTransfersReceived<T extends User$ownershipTransfersReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ownershipTransfersReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly profilePhotoUrl: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedGroups
   */
  export type User$ownedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.groupMemberships
   */
  export type User$groupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.createdExpenses
   */
  export type User$createdExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.paidExpenses
   */
  export type User$paidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.expenseParticipations
   */
  export type User$expenseParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * User.settlementsPaid
   */
  export type User$settlementsPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.settlementsReceived
   */
  export type User$settlementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.friendshipsAsUser1
   */
  export type User$friendshipsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.friendshipsAsUser2
   */
  export type User$friendshipsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.ownershipTransfersStarted
   */
  export type User$ownershipTransfersStartedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    where?: OwnershipTransferWhereInput
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    cursor?: OwnershipTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * User.ownershipTransfersReceived
   */
  export type User$ownershipTransfersReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    where?: OwnershipTransferWhereInput
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    cursor?: OwnershipTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    createdAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "createdAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly user1Id: FieldRef<"Friendship", 'String'>
    readonly user2Id: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    inviteCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    expenses?: boolean | Group$expensesArgs<ExtArgs>
    settlements?: boolean | Group$settlementsArgs<ExtArgs>
    activities?: boolean | Group$activitiesArgs<ExtArgs>
    ownershipTransfers?: boolean | Group$ownershipTransfersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "inviteCode" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    expenses?: boolean | Group$expensesArgs<ExtArgs>
    settlements?: boolean | Group$settlementsArgs<ExtArgs>
    activities?: boolean | Group$activitiesArgs<ExtArgs>
    ownershipTransfers?: boolean | Group$ownershipTransfersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      settlements: Prisma.$SettlementPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      ownershipTransfers: Prisma.$OwnershipTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      inviteCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Group$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Group$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends Group$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, Group$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Group$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Group$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownershipTransfers<T extends Group$ownershipTransfersArgs<ExtArgs> = {}>(args?: Subset<T, Group$ownershipTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly ownerId: FieldRef<"Group", 'String'>
    readonly inviteCode: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.expenses
   */
  export type Group$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Group.settlements
   */
  export type Group$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Group.activities
   */
  export type Group$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Group.ownershipTransfers
   */
  export type Group$ownershipTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    where?: OwnershipTransferWhereInput
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    cursor?: OwnershipTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    joinedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "joinedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      joinedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    splitType: $Enums.SplitType | null
    payerId: string | null
    creatorId: string | null
    groupId: string | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    splitType: $Enums.SplitType | null
    payerId: string | null
    creatorId: string | null
    groupId: string | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    splitType: number
    payerId: number
    creatorId: number
    groupId: number
    receiptUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    splitType?: true
    payerId?: true
    creatorId?: true
    groupId?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    splitType?: true
    payerId?: true
    creatorId?: true
    groupId?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    splitType?: true
    payerId?: true
    creatorId?: true
    groupId?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    description: string
    amount: Decimal
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    groupId: string | null
    receiptUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    splitType?: boolean
    payerId?: boolean
    creatorId?: boolean
    groupId?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    splitType?: boolean
    payerId?: boolean
    creatorId?: boolean
    groupId?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    splitType?: boolean
    payerId?: boolean
    creatorId?: boolean
    groupId?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    splitType?: boolean
    payerId?: boolean
    creatorId?: boolean
    groupId?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "splitType" | "payerId" | "creatorId" | "groupId" | "receiptUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      payer: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
      participants: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: Prisma.Decimal
      splitType: $Enums.SplitType
      payerId: string
      creatorId: string
      groupId: string | null
      receiptUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Expense$groupArgs<ExtArgs> = {}>(args?: Subset<T, Expense$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends Expense$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly splitType: FieldRef<"Expense", 'SplitType'>
    readonly payerId: FieldRef<"Expense", 'String'>
    readonly creatorId: FieldRef<"Expense", 'String'>
    readonly groupId: FieldRef<"Expense", 'String'>
    readonly receiptUrl: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.group
   */
  export type Expense$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Expense.participants
   */
  export type Expense$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseParticipant
   */

  export type AggregateExpenseParticipant = {
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  export type ExpenseParticipantAvgAggregateOutputType = {
    amountOwed: Decimal | null
    percentage: Decimal | null
    shares: number | null
  }

  export type ExpenseParticipantSumAggregateOutputType = {
    amountOwed: Decimal | null
    percentage: Decimal | null
    shares: number | null
  }

  export type ExpenseParticipantMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    amountOwed: Decimal | null
    percentage: Decimal | null
    shares: number | null
  }

  export type ExpenseParticipantMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    amountOwed: Decimal | null
    percentage: Decimal | null
    shares: number | null
  }

  export type ExpenseParticipantCountAggregateOutputType = {
    id: number
    expenseId: number
    userId: number
    amountOwed: number
    percentage: number
    shares: number
    _all: number
  }


  export type ExpenseParticipantAvgAggregateInputType = {
    amountOwed?: true
    percentage?: true
    shares?: true
  }

  export type ExpenseParticipantSumAggregateInputType = {
    amountOwed?: true
    percentage?: true
    shares?: true
  }

  export type ExpenseParticipantMinAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amountOwed?: true
    percentage?: true
    shares?: true
  }

  export type ExpenseParticipantMaxAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amountOwed?: true
    percentage?: true
    shares?: true
  }

  export type ExpenseParticipantCountAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amountOwed?: true
    percentage?: true
    shares?: true
    _all?: true
  }

  export type ExpenseParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipant to aggregate.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseParticipants
    **/
    _count?: true | ExpenseParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type GetExpenseParticipantAggregateType<T extends ExpenseParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseParticipant[P]>
      : GetScalarType<T[P], AggregateExpenseParticipant[P]>
  }




  export type ExpenseParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithAggregationInput | ExpenseParticipantOrderByWithAggregationInput[]
    by: ExpenseParticipantScalarFieldEnum[] | ExpenseParticipantScalarFieldEnum
    having?: ExpenseParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseParticipantCountAggregateInputType | true
    _avg?: ExpenseParticipantAvgAggregateInputType
    _sum?: ExpenseParticipantSumAggregateInputType
    _min?: ExpenseParticipantMinAggregateInputType
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type ExpenseParticipantGroupByOutputType = {
    id: string
    expenseId: string
    userId: string
    amountOwed: Decimal
    percentage: Decimal | null
    shares: number | null
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  type GetExpenseParticipantGroupByPayload<T extends ExpenseParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amountOwed?: boolean
    percentage?: boolean
    shares?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amountOwed?: boolean
    percentage?: boolean
    shares?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amountOwed?: boolean
    percentage?: boolean
    shares?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectScalar = {
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amountOwed?: boolean
    percentage?: boolean
    shares?: boolean
  }

  export type ExpenseParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "userId" | "amountOwed" | "percentage" | "shares", ExtArgs["result"]["expenseParticipant"]>
  export type ExpenseParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseParticipant"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      userId: string
      amountOwed: Prisma.Decimal
      percentage: Prisma.Decimal | null
      shares: number | null
    }, ExtArgs["result"]["expenseParticipant"]>
    composites: {}
  }

  type ExpenseParticipantGetPayload<S extends boolean | null | undefined | ExpenseParticipantDefaultArgs> = $Result.GetResult<Prisma.$ExpenseParticipantPayload, S>

  type ExpenseParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseParticipantCountAggregateInputType | true
    }

  export interface ExpenseParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseParticipant'], meta: { name: 'ExpenseParticipant' } }
    /**
     * Find zero or one ExpenseParticipant that matches the filter.
     * @param {ExpenseParticipantFindUniqueArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseParticipantFindUniqueArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseParticipantFindUniqueOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseParticipantFindFirstArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany()
     * 
     * // Get first 10 ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseParticipantFindManyArgs>(args?: SelectSubset<T, ExpenseParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseParticipant.
     * @param {ExpenseParticipantCreateArgs} args - Arguments to create a ExpenseParticipant.
     * @example
     * // Create one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.create({
     *   data: {
     *     // ... data to create a ExpenseParticipant
     *   }
     * })
     * 
     */
    create<T extends ExpenseParticipantCreateArgs>(args: SelectSubset<T, ExpenseParticipantCreateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseParticipants.
     * @param {ExpenseParticipantCreateManyArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseParticipantCreateManyArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseParticipants and returns the data saved in the database.
     * @param {ExpenseParticipantCreateManyAndReturnArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseParticipant.
     * @param {ExpenseParticipantDeleteArgs} args - Arguments to delete one ExpenseParticipant.
     * @example
     * // Delete one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.delete({
     *   where: {
     *     // ... filter to delete one ExpenseParticipant
     *   }
     * })
     * 
     */
    delete<T extends ExpenseParticipantDeleteArgs>(args: SelectSubset<T, ExpenseParticipantDeleteArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseParticipant.
     * @param {ExpenseParticipantUpdateArgs} args - Arguments to update one ExpenseParticipant.
     * @example
     * // Update one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseParticipantUpdateArgs>(args: SelectSubset<T, ExpenseParticipantUpdateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseParticipants.
     * @param {ExpenseParticipantDeleteManyArgs} args - Arguments to filter ExpenseParticipants to delete.
     * @example
     * // Delete a few ExpenseParticipants
     * const { count } = await prisma.expenseParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseParticipantDeleteManyArgs>(args?: SelectSubset<T, ExpenseParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseParticipantUpdateManyArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants and returns the data updated in the database.
     * @param {ExpenseParticipantUpdateManyAndReturnArgs} args - Arguments to update many ExpenseParticipants.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseParticipant.
     * @param {ExpenseParticipantUpsertArgs} args - Arguments to update or create a ExpenseParticipant.
     * @example
     * // Update or create a ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.upsert({
     *   create: {
     *     // ... data to create a ExpenseParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseParticipantUpsertArgs>(args: SelectSubset<T, ExpenseParticipantUpsertArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantCountArgs} args - Arguments to filter ExpenseParticipants to count.
     * @example
     * // Count the number of ExpenseParticipants
     * const count = await prisma.expenseParticipant.count({
     *   where: {
     *     // ... the filter for the ExpenseParticipants we want to count
     *   }
     * })
    **/
    count<T extends ExpenseParticipantCountArgs>(
      args?: Subset<T, ExpenseParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseParticipantAggregateArgs>(args: Subset<T, ExpenseParticipantAggregateArgs>): Prisma.PrismaPromise<GetExpenseParticipantAggregateType<T>>

    /**
     * Group by ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseParticipant model
   */
  readonly fields: ExpenseParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseParticipant model
   */
  interface ExpenseParticipantFieldRefs {
    readonly id: FieldRef<"ExpenseParticipant", 'String'>
    readonly expenseId: FieldRef<"ExpenseParticipant", 'String'>
    readonly userId: FieldRef<"ExpenseParticipant", 'String'>
    readonly amountOwed: FieldRef<"ExpenseParticipant", 'Decimal'>
    readonly percentage: FieldRef<"ExpenseParticipant", 'Decimal'>
    readonly shares: FieldRef<"ExpenseParticipant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseParticipant findUnique
   */
  export type ExpenseParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findUniqueOrThrow
   */
  export type ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findFirst
   */
  export type ExpenseParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findFirstOrThrow
   */
  export type ExpenseParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findMany
   */
  export type ExpenseParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipants to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant create
   */
  export type ExpenseParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
  }

  /**
   * ExpenseParticipant createMany
   */
  export type ExpenseParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseParticipant createManyAndReturn
   */
  export type ExpenseParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant update
   */
  export type ExpenseParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
    /**
     * Choose, which ExpenseParticipant to update.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant updateMany
   */
  export type ExpenseParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant updateManyAndReturn
   */
  export type ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant upsert
   */
  export type ExpenseParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseParticipant to update in case it exists.
     */
    where: ExpenseParticipantWhereUniqueInput
    /**
     * In case the ExpenseParticipant found by the `where` argument doesn't exist, create a new ExpenseParticipant with this data.
     */
    create: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
    /**
     * In case the ExpenseParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
  }

  /**
   * ExpenseParticipant delete
   */
  export type ExpenseParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter which ExpenseParticipant to delete.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant deleteMany
   */
  export type ExpenseParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipants to delete
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to delete.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant without action
   */
  export type ExpenseParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Settlement
   */

  export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  export type SettlementAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    payerId: string | null
    receiverId: string | null
    groupId: string | null
    note: string | null
    screenshotUrl: string | null
    createdAt: Date | null
  }

  export type SettlementMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    payerId: string | null
    receiverId: string | null
    groupId: string | null
    note: string | null
    screenshotUrl: string | null
    createdAt: Date | null
  }

  export type SettlementCountAggregateOutputType = {
    id: number
    amount: number
    payerId: number
    receiverId: number
    groupId: number
    note: number
    screenshotUrl: number
    createdAt: number
    _all: number
  }


  export type SettlementAvgAggregateInputType = {
    amount?: true
  }

  export type SettlementSumAggregateInputType = {
    amount?: true
  }

  export type SettlementMinAggregateInputType = {
    id?: true
    amount?: true
    payerId?: true
    receiverId?: true
    groupId?: true
    note?: true
    screenshotUrl?: true
    createdAt?: true
  }

  export type SettlementMaxAggregateInputType = {
    id?: true
    amount?: true
    payerId?: true
    receiverId?: true
    groupId?: true
    note?: true
    screenshotUrl?: true
    createdAt?: true
  }

  export type SettlementCountAggregateInputType = {
    id?: true
    amount?: true
    payerId?: true
    receiverId?: true
    groupId?: true
    note?: true
    screenshotUrl?: true
    createdAt?: true
    _all?: true
  }

  export type SettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlement to aggregate.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settlements
    **/
    _count?: true | SettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementMaxAggregateInputType
  }

  export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlement[P]>
      : GetScalarType<T[P], AggregateSettlement[P]>
  }




  export type SettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithAggregationInput | SettlementOrderByWithAggregationInput[]
    by: SettlementScalarFieldEnum[] | SettlementScalarFieldEnum
    having?: SettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementCountAggregateInputType | true
    _avg?: SettlementAvgAggregateInputType
    _sum?: SettlementSumAggregateInputType
    _min?: SettlementMinAggregateInputType
    _max?: SettlementMaxAggregateInputType
  }

  export type SettlementGroupByOutputType = {
    id: string
    amount: Decimal
    payerId: string
    receiverId: string
    groupId: string | null
    note: string | null
    screenshotUrl: string | null
    createdAt: Date
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementGroupByOutputType[P]>
        }
      >
    >


  export type SettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    payerId?: boolean
    receiverId?: boolean
    groupId?: boolean
    note?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    payerId?: boolean
    receiverId?: boolean
    groupId?: boolean
    note?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    payerId?: boolean
    receiverId?: boolean
    groupId?: boolean
    note?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectScalar = {
    id?: boolean
    amount?: boolean
    payerId?: boolean
    receiverId?: boolean
    groupId?: boolean
    note?: boolean
    screenshotUrl?: boolean
    createdAt?: boolean
  }

  export type SettlementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "payerId" | "receiverId" | "groupId" | "note" | "screenshotUrl" | "createdAt", ExtArgs["result"]["settlement"]>
  export type SettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }
  export type SettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }
  export type SettlementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Settlement$groupArgs<ExtArgs>
  }

  export type $SettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settlement"
    objects: {
      payer: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      payerId: string
      receiverId: string
      groupId: string | null
      note: string | null
      screenshotUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["settlement"]>
    composites: {}
  }

  type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = $Result.GetResult<Prisma.$SettlementPayload, S>

  type SettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementCountAggregateInputType | true
    }

  export interface SettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settlement'], meta: { name: 'Settlement' } }
    /**
     * Find zero or one Settlement that matches the filter.
     * @param {SettlementFindUniqueArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementFindUniqueArgs>(args: SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settlement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettlementFindUniqueOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementFindFirstArgs>(args?: SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlement.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementWithIdOnly = await prisma.settlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementFindManyArgs>(args?: SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settlement.
     * @param {SettlementCreateArgs} args - Arguments to create a Settlement.
     * @example
     * // Create one Settlement
     * const Settlement = await prisma.settlement.create({
     *   data: {
     *     // ... data to create a Settlement
     *   }
     * })
     * 
     */
    create<T extends SettlementCreateArgs>(args: SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settlements.
     * @param {SettlementCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementCreateManyArgs>(args?: SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {SettlementCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settlement.
     * @param {SettlementDeleteArgs} args - Arguments to delete one Settlement.
     * @example
     * // Delete one Settlement
     * const Settlement = await prisma.settlement.delete({
     *   where: {
     *     // ... filter to delete one Settlement
     *   }
     * })
     * 
     */
    delete<T extends SettlementDeleteArgs>(args: SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settlement.
     * @param {SettlementUpdateArgs} args - Arguments to update one Settlement.
     * @example
     * // Update one Settlement
     * const settlement = await prisma.settlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementUpdateArgs>(args: SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settlements.
     * @param {SettlementDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementDeleteManyArgs>(args?: SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementUpdateManyArgs>(args: SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements and returns the data updated in the database.
     * @param {SettlementUpdateManyAndReturnArgs} args - Arguments to update many Settlements.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettlementUpdateManyAndReturnArgs>(args: SelectSubset<T, SettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settlement.
     * @param {SettlementUpsertArgs} args - Arguments to update or create a Settlement.
     * @example
     * // Update or create a Settlement
     * const settlement = await prisma.settlement.upsert({
     *   create: {
     *     // ... data to create a Settlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlement we want to update
     *   }
     * })
     */
    upsert<T extends SettlementUpsertArgs>(args: SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlement.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends SettlementCountArgs>(
      args?: Subset<T, SettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementAggregateArgs>(args: Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>

    /**
     * Group by Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementGroupByArgs['orderBy'] }
        : { orderBy?: SettlementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settlement model
   */
  readonly fields: SettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Settlement$groupArgs<ExtArgs> = {}>(args?: Subset<T, Settlement$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settlement model
   */
  interface SettlementFieldRefs {
    readonly id: FieldRef<"Settlement", 'String'>
    readonly amount: FieldRef<"Settlement", 'Decimal'>
    readonly payerId: FieldRef<"Settlement", 'String'>
    readonly receiverId: FieldRef<"Settlement", 'String'>
    readonly groupId: FieldRef<"Settlement", 'String'>
    readonly note: FieldRef<"Settlement", 'String'>
    readonly screenshotUrl: FieldRef<"Settlement", 'String'>
    readonly createdAt: FieldRef<"Settlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settlement findUnique
   */
  export type SettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findUniqueOrThrow
   */
  export type SettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findFirst
   */
  export type SettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findFirstOrThrow
   */
  export type SettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findMany
   */
  export type SettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlements to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement create
   */
  export type SettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Settlement.
     */
    data: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
  }

  /**
   * Settlement createMany
   */
  export type SettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settlement createManyAndReturn
   */
  export type SettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement update
   */
  export type SettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Settlement.
     */
    data: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
    /**
     * Choose, which Settlement to update.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement updateMany
   */
  export type SettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
  }

  /**
   * Settlement updateManyAndReturn
   */
  export type SettlementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement upsert
   */
  export type SettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Settlement to update in case it exists.
     */
    where: SettlementWhereUniqueInput
    /**
     * In case the Settlement found by the `where` argument doesn't exist, create a new Settlement with this data.
     */
    create: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
    /**
     * In case the Settlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
  }

  /**
   * Settlement delete
   */
  export type SettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter which Settlement to delete.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement deleteMany
   */
  export type SettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlements to delete
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to delete.
     */
    limit?: number
  }

  /**
   * Settlement.group
   */
  export type Settlement$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Settlement without action
   */
  export type SettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    groupId: string | null
    activityType: $Enums.ActivityType | null
    entityId: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    groupId: string | null
    activityType: $Enums.ActivityType | null
    entityId: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    actorId: number
    groupId: number
    activityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    actorId?: true
    groupId?: true
    activityType?: true
    entityId?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    actorId?: true
    groupId?: true
    activityType?: true
    entityId?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    actorId?: true
    groupId?: true
    activityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    actorId: string
    groupId: string | null
    activityType: $Enums.ActivityType
    entityId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    groupId?: boolean
    activityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    groupId?: boolean
    activityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    groupId?: boolean
    activityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    actorId?: boolean
    groupId?: boolean
    activityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "groupId" | "activityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Activity$groupArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      groupId: string | null
      activityType: $Enums.ActivityType
      entityId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Activity$groupArgs<ExtArgs> = {}>(args?: Subset<T, Activity$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly actorId: FieldRef<"Activity", 'String'>
    readonly groupId: FieldRef<"Activity", 'String'>
    readonly activityType: FieldRef<"Activity", 'ActivityType'>
    readonly entityId: FieldRef<"Activity", 'String'>
    readonly metadata: FieldRef<"Activity", 'Json'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.group
   */
  export type Activity$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model OwnershipTransfer
   */

  export type AggregateOwnershipTransfer = {
    _count: OwnershipTransferCountAggregateOutputType | null
    _min: OwnershipTransferMinAggregateOutputType | null
    _max: OwnershipTransferMaxAggregateOutputType | null
  }

  export type OwnershipTransferMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    currentOwnerId: string | null
    proposedOwnerId: string | null
    status: $Enums.OwnershipTransferStatus | null
    createdAt: Date | null
    respondedAt: Date | null
  }

  export type OwnershipTransferMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    currentOwnerId: string | null
    proposedOwnerId: string | null
    status: $Enums.OwnershipTransferStatus | null
    createdAt: Date | null
    respondedAt: Date | null
  }

  export type OwnershipTransferCountAggregateOutputType = {
    id: number
    groupId: number
    currentOwnerId: number
    proposedOwnerId: number
    status: number
    createdAt: number
    respondedAt: number
    _all: number
  }


  export type OwnershipTransferMinAggregateInputType = {
    id?: true
    groupId?: true
    currentOwnerId?: true
    proposedOwnerId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
  }

  export type OwnershipTransferMaxAggregateInputType = {
    id?: true
    groupId?: true
    currentOwnerId?: true
    proposedOwnerId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
  }

  export type OwnershipTransferCountAggregateInputType = {
    id?: true
    groupId?: true
    currentOwnerId?: true
    proposedOwnerId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
    _all?: true
  }

  export type OwnershipTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnershipTransfer to aggregate.
     */
    where?: OwnershipTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnershipTransfers to fetch.
     */
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnershipTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnershipTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnershipTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnershipTransfers
    **/
    _count?: true | OwnershipTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnershipTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnershipTransferMaxAggregateInputType
  }

  export type GetOwnershipTransferAggregateType<T extends OwnershipTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnershipTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnershipTransfer[P]>
      : GetScalarType<T[P], AggregateOwnershipTransfer[P]>
  }




  export type OwnershipTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipTransferWhereInput
    orderBy?: OwnershipTransferOrderByWithAggregationInput | OwnershipTransferOrderByWithAggregationInput[]
    by: OwnershipTransferScalarFieldEnum[] | OwnershipTransferScalarFieldEnum
    having?: OwnershipTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnershipTransferCountAggregateInputType | true
    _min?: OwnershipTransferMinAggregateInputType
    _max?: OwnershipTransferMaxAggregateInputType
  }

  export type OwnershipTransferGroupByOutputType = {
    id: string
    groupId: string
    currentOwnerId: string
    proposedOwnerId: string
    status: $Enums.OwnershipTransferStatus
    createdAt: Date
    respondedAt: Date | null
    _count: OwnershipTransferCountAggregateOutputType | null
    _min: OwnershipTransferMinAggregateOutputType | null
    _max: OwnershipTransferMaxAggregateOutputType | null
  }

  type GetOwnershipTransferGroupByPayload<T extends OwnershipTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnershipTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnershipTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnershipTransferGroupByOutputType[P]>
            : GetScalarType<T[P], OwnershipTransferGroupByOutputType[P]>
        }
      >
    >


  export type OwnershipTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    currentOwnerId?: boolean
    proposedOwnerId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownershipTransfer"]>

  export type OwnershipTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    currentOwnerId?: boolean
    proposedOwnerId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownershipTransfer"]>

  export type OwnershipTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    currentOwnerId?: boolean
    proposedOwnerId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownershipTransfer"]>

  export type OwnershipTransferSelectScalar = {
    id?: boolean
    groupId?: boolean
    currentOwnerId?: boolean
    proposedOwnerId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
  }

  export type OwnershipTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "currentOwnerId" | "proposedOwnerId" | "status" | "createdAt" | "respondedAt", ExtArgs["result"]["ownershipTransfer"]>
  export type OwnershipTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OwnershipTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OwnershipTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    currentOwner?: boolean | UserDefaultArgs<ExtArgs>
    proposedOwner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OwnershipTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnershipTransfer"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      currentOwner: Prisma.$UserPayload<ExtArgs>
      proposedOwner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      currentOwnerId: string
      proposedOwnerId: string
      status: $Enums.OwnershipTransferStatus
      createdAt: Date
      respondedAt: Date | null
    }, ExtArgs["result"]["ownershipTransfer"]>
    composites: {}
  }

  type OwnershipTransferGetPayload<S extends boolean | null | undefined | OwnershipTransferDefaultArgs> = $Result.GetResult<Prisma.$OwnershipTransferPayload, S>

  type OwnershipTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnershipTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnershipTransferCountAggregateInputType | true
    }

  export interface OwnershipTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnershipTransfer'], meta: { name: 'OwnershipTransfer' } }
    /**
     * Find zero or one OwnershipTransfer that matches the filter.
     * @param {OwnershipTransferFindUniqueArgs} args - Arguments to find a OwnershipTransfer
     * @example
     * // Get one OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnershipTransferFindUniqueArgs>(args: SelectSubset<T, OwnershipTransferFindUniqueArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnershipTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnershipTransferFindUniqueOrThrowArgs} args - Arguments to find a OwnershipTransfer
     * @example
     * // Get one OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnershipTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnershipTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnershipTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferFindFirstArgs} args - Arguments to find a OwnershipTransfer
     * @example
     * // Get one OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnershipTransferFindFirstArgs>(args?: SelectSubset<T, OwnershipTransferFindFirstArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnershipTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferFindFirstOrThrowArgs} args - Arguments to find a OwnershipTransfer
     * @example
     * // Get one OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnershipTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnershipTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnershipTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnershipTransfers
     * const ownershipTransfers = await prisma.ownershipTransfer.findMany()
     * 
     * // Get first 10 OwnershipTransfers
     * const ownershipTransfers = await prisma.ownershipTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownershipTransferWithIdOnly = await prisma.ownershipTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnershipTransferFindManyArgs>(args?: SelectSubset<T, OwnershipTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnershipTransfer.
     * @param {OwnershipTransferCreateArgs} args - Arguments to create a OwnershipTransfer.
     * @example
     * // Create one OwnershipTransfer
     * const OwnershipTransfer = await prisma.ownershipTransfer.create({
     *   data: {
     *     // ... data to create a OwnershipTransfer
     *   }
     * })
     * 
     */
    create<T extends OwnershipTransferCreateArgs>(args: SelectSubset<T, OwnershipTransferCreateArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnershipTransfers.
     * @param {OwnershipTransferCreateManyArgs} args - Arguments to create many OwnershipTransfers.
     * @example
     * // Create many OwnershipTransfers
     * const ownershipTransfer = await prisma.ownershipTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnershipTransferCreateManyArgs>(args?: SelectSubset<T, OwnershipTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnershipTransfers and returns the data saved in the database.
     * @param {OwnershipTransferCreateManyAndReturnArgs} args - Arguments to create many OwnershipTransfers.
     * @example
     * // Create many OwnershipTransfers
     * const ownershipTransfer = await prisma.ownershipTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnershipTransfers and only return the `id`
     * const ownershipTransferWithIdOnly = await prisma.ownershipTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnershipTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnershipTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnershipTransfer.
     * @param {OwnershipTransferDeleteArgs} args - Arguments to delete one OwnershipTransfer.
     * @example
     * // Delete one OwnershipTransfer
     * const OwnershipTransfer = await prisma.ownershipTransfer.delete({
     *   where: {
     *     // ... filter to delete one OwnershipTransfer
     *   }
     * })
     * 
     */
    delete<T extends OwnershipTransferDeleteArgs>(args: SelectSubset<T, OwnershipTransferDeleteArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnershipTransfer.
     * @param {OwnershipTransferUpdateArgs} args - Arguments to update one OwnershipTransfer.
     * @example
     * // Update one OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnershipTransferUpdateArgs>(args: SelectSubset<T, OwnershipTransferUpdateArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnershipTransfers.
     * @param {OwnershipTransferDeleteManyArgs} args - Arguments to filter OwnershipTransfers to delete.
     * @example
     * // Delete a few OwnershipTransfers
     * const { count } = await prisma.ownershipTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnershipTransferDeleteManyArgs>(args?: SelectSubset<T, OwnershipTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnershipTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnershipTransfers
     * const ownershipTransfer = await prisma.ownershipTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnershipTransferUpdateManyArgs>(args: SelectSubset<T, OwnershipTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnershipTransfers and returns the data updated in the database.
     * @param {OwnershipTransferUpdateManyAndReturnArgs} args - Arguments to update many OwnershipTransfers.
     * @example
     * // Update many OwnershipTransfers
     * const ownershipTransfer = await prisma.ownershipTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnershipTransfers and only return the `id`
     * const ownershipTransferWithIdOnly = await prisma.ownershipTransfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnershipTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnershipTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnershipTransfer.
     * @param {OwnershipTransferUpsertArgs} args - Arguments to update or create a OwnershipTransfer.
     * @example
     * // Update or create a OwnershipTransfer
     * const ownershipTransfer = await prisma.ownershipTransfer.upsert({
     *   create: {
     *     // ... data to create a OwnershipTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnershipTransfer we want to update
     *   }
     * })
     */
    upsert<T extends OwnershipTransferUpsertArgs>(args: SelectSubset<T, OwnershipTransferUpsertArgs<ExtArgs>>): Prisma__OwnershipTransferClient<$Result.GetResult<Prisma.$OwnershipTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnershipTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferCountArgs} args - Arguments to filter OwnershipTransfers to count.
     * @example
     * // Count the number of OwnershipTransfers
     * const count = await prisma.ownershipTransfer.count({
     *   where: {
     *     // ... the filter for the OwnershipTransfers we want to count
     *   }
     * })
    **/
    count<T extends OwnershipTransferCountArgs>(
      args?: Subset<T, OwnershipTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnershipTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnershipTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnershipTransferAggregateArgs>(args: Subset<T, OwnershipTransferAggregateArgs>): Prisma.PrismaPromise<GetOwnershipTransferAggregateType<T>>

    /**
     * Group by OwnershipTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnershipTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnershipTransferGroupByArgs['orderBy'] }
        : { orderBy?: OwnershipTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnershipTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnershipTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnershipTransfer model
   */
  readonly fields: OwnershipTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnershipTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnershipTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposedOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OwnershipTransfer model
   */
  interface OwnershipTransferFieldRefs {
    readonly id: FieldRef<"OwnershipTransfer", 'String'>
    readonly groupId: FieldRef<"OwnershipTransfer", 'String'>
    readonly currentOwnerId: FieldRef<"OwnershipTransfer", 'String'>
    readonly proposedOwnerId: FieldRef<"OwnershipTransfer", 'String'>
    readonly status: FieldRef<"OwnershipTransfer", 'OwnershipTransferStatus'>
    readonly createdAt: FieldRef<"OwnershipTransfer", 'DateTime'>
    readonly respondedAt: FieldRef<"OwnershipTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OwnershipTransfer findUnique
   */
  export type OwnershipTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter, which OwnershipTransfer to fetch.
     */
    where: OwnershipTransferWhereUniqueInput
  }

  /**
   * OwnershipTransfer findUniqueOrThrow
   */
  export type OwnershipTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter, which OwnershipTransfer to fetch.
     */
    where: OwnershipTransferWhereUniqueInput
  }

  /**
   * OwnershipTransfer findFirst
   */
  export type OwnershipTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter, which OwnershipTransfer to fetch.
     */
    where?: OwnershipTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnershipTransfers to fetch.
     */
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnershipTransfers.
     */
    cursor?: OwnershipTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnershipTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnershipTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnershipTransfers.
     */
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * OwnershipTransfer findFirstOrThrow
   */
  export type OwnershipTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter, which OwnershipTransfer to fetch.
     */
    where?: OwnershipTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnershipTransfers to fetch.
     */
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnershipTransfers.
     */
    cursor?: OwnershipTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnershipTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnershipTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnershipTransfers.
     */
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * OwnershipTransfer findMany
   */
  export type OwnershipTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter, which OwnershipTransfers to fetch.
     */
    where?: OwnershipTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnershipTransfers to fetch.
     */
    orderBy?: OwnershipTransferOrderByWithRelationInput | OwnershipTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnershipTransfers.
     */
    cursor?: OwnershipTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnershipTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnershipTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnershipTransfers.
     */
    distinct?: OwnershipTransferScalarFieldEnum | OwnershipTransferScalarFieldEnum[]
  }

  /**
   * OwnershipTransfer create
   */
  export type OwnershipTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnershipTransfer.
     */
    data: XOR<OwnershipTransferCreateInput, OwnershipTransferUncheckedCreateInput>
  }

  /**
   * OwnershipTransfer createMany
   */
  export type OwnershipTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnershipTransfers.
     */
    data: OwnershipTransferCreateManyInput | OwnershipTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnershipTransfer createManyAndReturn
   */
  export type OwnershipTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * The data used to create many OwnershipTransfers.
     */
    data: OwnershipTransferCreateManyInput | OwnershipTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnershipTransfer update
   */
  export type OwnershipTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnershipTransfer.
     */
    data: XOR<OwnershipTransferUpdateInput, OwnershipTransferUncheckedUpdateInput>
    /**
     * Choose, which OwnershipTransfer to update.
     */
    where: OwnershipTransferWhereUniqueInput
  }

  /**
   * OwnershipTransfer updateMany
   */
  export type OwnershipTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnershipTransfers.
     */
    data: XOR<OwnershipTransferUpdateManyMutationInput, OwnershipTransferUncheckedUpdateManyInput>
    /**
     * Filter which OwnershipTransfers to update
     */
    where?: OwnershipTransferWhereInput
    /**
     * Limit how many OwnershipTransfers to update.
     */
    limit?: number
  }

  /**
   * OwnershipTransfer updateManyAndReturn
   */
  export type OwnershipTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * The data used to update OwnershipTransfers.
     */
    data: XOR<OwnershipTransferUpdateManyMutationInput, OwnershipTransferUncheckedUpdateManyInput>
    /**
     * Filter which OwnershipTransfers to update
     */
    where?: OwnershipTransferWhereInput
    /**
     * Limit how many OwnershipTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnershipTransfer upsert
   */
  export type OwnershipTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnershipTransfer to update in case it exists.
     */
    where: OwnershipTransferWhereUniqueInput
    /**
     * In case the OwnershipTransfer found by the `where` argument doesn't exist, create a new OwnershipTransfer with this data.
     */
    create: XOR<OwnershipTransferCreateInput, OwnershipTransferUncheckedCreateInput>
    /**
     * In case the OwnershipTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnershipTransferUpdateInput, OwnershipTransferUncheckedUpdateInput>
  }

  /**
   * OwnershipTransfer delete
   */
  export type OwnershipTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
    /**
     * Filter which OwnershipTransfer to delete.
     */
    where: OwnershipTransferWhereUniqueInput
  }

  /**
   * OwnershipTransfer deleteMany
   */
  export type OwnershipTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnershipTransfers to delete
     */
    where?: OwnershipTransferWhereInput
    /**
     * Limit how many OwnershipTransfers to delete.
     */
    limit?: number
  }

  /**
   * OwnershipTransfer without action
   */
  export type OwnershipTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnershipTransfer
     */
    select?: OwnershipTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnershipTransfer
     */
    omit?: OwnershipTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnershipTransferInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    username: 'username',
    profilePhotoUrl: 'profilePhotoUrl',
    authProvider: 'authProvider',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    inviteCode: 'inviteCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    splitType: 'splitType',
    payerId: 'payerId',
    creatorId: 'creatorId',
    groupId: 'groupId',
    receiptUrl: 'receiptUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ExpenseParticipantScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    userId: 'userId',
    amountOwed: 'amountOwed',
    percentage: 'percentage',
    shares: 'shares'
  };

  export type ExpenseParticipantScalarFieldEnum = (typeof ExpenseParticipantScalarFieldEnum)[keyof typeof ExpenseParticipantScalarFieldEnum]


  export const SettlementScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    payerId: 'payerId',
    receiverId: 'receiverId',
    groupId: 'groupId',
    note: 'note',
    screenshotUrl: 'screenshotUrl',
    createdAt: 'createdAt'
  };

  export type SettlementScalarFieldEnum = (typeof SettlementScalarFieldEnum)[keyof typeof SettlementScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    groupId: 'groupId',
    activityType: 'activityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const OwnershipTransferScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    currentOwnerId: 'currentOwnerId',
    proposedOwnerId: 'proposedOwnerId',
    status: 'status',
    createdAt: 'createdAt',
    respondedAt: 'respondedAt'
  };

  export type OwnershipTransferScalarFieldEnum = (typeof OwnershipTransferScalarFieldEnum)[keyof typeof OwnershipTransferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SplitType'
   */
  export type EnumSplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SplitType'>
    


  /**
   * Reference to a field of type 'SplitType[]'
   */
  export type ListEnumSplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SplitType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'OwnershipTransferStatus'
   */
  export type EnumOwnershipTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipTransferStatus'>
    


  /**
   * Reference to a field of type 'OwnershipTransferStatus[]'
   */
  export type ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipTransferStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    profilePhotoUrl?: StringNullableFilter<"User"> | string | null
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    createdExpenses?: ExpenseListRelationFilter
    paidExpenses?: ExpenseListRelationFilter
    expenseParticipations?: ExpenseParticipantListRelationFilter
    settlementsPaid?: SettlementListRelationFilter
    settlementsReceived?: SettlementListRelationFilter
    activities?: ActivityListRelationFilter
    friendshipsAsUser1?: FriendshipListRelationFilter
    friendshipsAsUser2?: FriendshipListRelationFilter
    ownershipTransfersStarted?: OwnershipTransferListRelationFilter
    ownershipTransfersReceived?: OwnershipTransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrderInput | SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedGroups?: GroupOrderByRelationAggregateInput
    groupMemberships?: GroupMemberOrderByRelationAggregateInput
    createdExpenses?: ExpenseOrderByRelationAggregateInput
    paidExpenses?: ExpenseOrderByRelationAggregateInput
    expenseParticipations?: ExpenseParticipantOrderByRelationAggregateInput
    settlementsPaid?: SettlementOrderByRelationAggregateInput
    settlementsReceived?: SettlementOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    friendshipsAsUser1?: FriendshipOrderByRelationAggregateInput
    friendshipsAsUser2?: FriendshipOrderByRelationAggregateInput
    ownershipTransfersStarted?: OwnershipTransferOrderByRelationAggregateInput
    ownershipTransfersReceived?: OwnershipTransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    profilePhotoUrl?: StringNullableFilter<"User"> | string | null
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    createdExpenses?: ExpenseListRelationFilter
    paidExpenses?: ExpenseListRelationFilter
    expenseParticipations?: ExpenseParticipantListRelationFilter
    settlementsPaid?: SettlementListRelationFilter
    settlementsReceived?: SettlementListRelationFilter
    activities?: ActivityListRelationFilter
    friendshipsAsUser1?: FriendshipListRelationFilter
    friendshipsAsUser2?: FriendshipListRelationFilter
    ownershipTransfersStarted?: OwnershipTransferListRelationFilter
    ownershipTransfersReceived?: OwnershipTransferListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrderInput | SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user1Id_user2Id?: FriendshipUser1IdUser2IdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user1Id_user2Id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    user1Id?: StringWithAggregatesFilter<"Friendship"> | string
    user2Id?: StringWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    inviteCode?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    settlements?: SettlementListRelationFilter
    activities?: ActivityListRelationFilter
    ownershipTransfers?: OwnershipTransferListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    settlements?: SettlementOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    ownershipTransfers?: OwnershipTransferOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    settlements?: SettlementListRelationFilter
    activities?: ActivityListRelationFilter
    ownershipTransfers?: OwnershipTransferListRelationFilter
  }, "id" | "inviteCode">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    ownerId?: StringWithAggregatesFilter<"Group"> | string
    inviteCode?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    payerId?: StringFilter<"Expense"> | string
    creatorId?: StringFilter<"Expense"> | string
    groupId?: StringNullableFilter<"Expense"> | string | null
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    participants?: ExpenseParticipantListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    splitType?: SortOrder
    payerId?: SortOrder
    creatorId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payer?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    participants?: ExpenseParticipantOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    description?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    payerId?: StringFilter<"Expense"> | string
    creatorId?: StringFilter<"Expense"> | string
    groupId?: StringNullableFilter<"Expense"> | string | null
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    participants?: ExpenseParticipantListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    splitType?: SortOrder
    payerId?: SortOrder
    creatorId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeWithAggregatesFilter<"Expense"> | $Enums.SplitType
    payerId?: StringWithAggregatesFilter<"Expense"> | string
    creatorId?: StringWithAggregatesFilter<"Expense"> | string
    groupId?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ExpenseParticipantWhereInput = {
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    id?: StringFilter<"ExpenseParticipant"> | string
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    amountOwed?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalNullableFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string | null
    shares?: IntNullableFilter<"ExpenseParticipant"> | number | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseParticipantOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amountOwed?: SortOrder
    percentage?: SortOrderInput | SortOrder
    shares?: SortOrderInput | SortOrder
    expense?: ExpenseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    expenseId_userId?: ExpenseParticipantExpenseIdUserIdCompoundUniqueInput
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    amountOwed?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalNullableFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string | null
    shares?: IntNullableFilter<"ExpenseParticipant"> | number | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "expenseId_userId">

  export type ExpenseParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amountOwed?: SortOrder
    percentage?: SortOrderInput | SortOrder
    shares?: SortOrderInput | SortOrder
    _count?: ExpenseParticipantCountOrderByAggregateInput
    _avg?: ExpenseParticipantAvgOrderByAggregateInput
    _max?: ExpenseParticipantMaxOrderByAggregateInput
    _min?: ExpenseParticipantMinOrderByAggregateInput
    _sum?: ExpenseParticipantSumOrderByAggregateInput
  }

  export type ExpenseParticipantScalarWhereWithAggregatesInput = {
    AND?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    OR?: ExpenseParticipantScalarWhereWithAggregatesInput[]
    NOT?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    expenseId?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    userId?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    amountOwed?: DecimalWithAggregatesFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalNullableWithAggregatesFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string | null
    shares?: IntNullableWithAggregatesFilter<"ExpenseParticipant"> | number | null
  }

  export type SettlementWhereInput = {
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    id?: StringFilter<"Settlement"> | string
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    payerId?: StringFilter<"Settlement"> | string
    receiverId?: StringFilter<"Settlement"> | string
    groupId?: StringNullableFilter<"Settlement"> | string | null
    note?: StringNullableFilter<"Settlement"> | string | null
    screenshotUrl?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type SettlementOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payer?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    payerId?: StringFilter<"Settlement"> | string
    receiverId?: StringFilter<"Settlement"> | string
    groupId?: StringNullableFilter<"Settlement"> | string | null
    note?: StringNullableFilter<"Settlement"> | string | null
    screenshotUrl?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type SettlementOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SettlementCountOrderByAggregateInput
    _avg?: SettlementAvgOrderByAggregateInput
    _max?: SettlementMaxOrderByAggregateInput
    _min?: SettlementMinOrderByAggregateInput
    _sum?: SettlementSumOrderByAggregateInput
  }

  export type SettlementScalarWhereWithAggregatesInput = {
    AND?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    OR?: SettlementScalarWhereWithAggregatesInput[]
    NOT?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settlement"> | string
    amount?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    payerId?: StringWithAggregatesFilter<"Settlement"> | string
    receiverId?: StringWithAggregatesFilter<"Settlement"> | string
    groupId?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    note?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    screenshotUrl?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    actorId?: StringFilter<"Activity"> | string
    groupId?: StringNullableFilter<"Activity"> | string | null
    activityType?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    entityId?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    activityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    actorId?: StringFilter<"Activity"> | string
    groupId?: StringNullableFilter<"Activity"> | string | null
    activityType?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    entityId?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    activityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    actorId?: StringWithAggregatesFilter<"Activity"> | string
    groupId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    activityType?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    entityId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Activity">
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type OwnershipTransferWhereInput = {
    AND?: OwnershipTransferWhereInput | OwnershipTransferWhereInput[]
    OR?: OwnershipTransferWhereInput[]
    NOT?: OwnershipTransferWhereInput | OwnershipTransferWhereInput[]
    id?: StringFilter<"OwnershipTransfer"> | string
    groupId?: StringFilter<"OwnershipTransfer"> | string
    currentOwnerId?: StringFilter<"OwnershipTransfer"> | string
    proposedOwnerId?: StringFilter<"OwnershipTransfer"> | string
    status?: EnumOwnershipTransferStatusFilter<"OwnershipTransfer"> | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFilter<"OwnershipTransfer"> | Date | string
    respondedAt?: DateTimeNullableFilter<"OwnershipTransfer"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    currentOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposedOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OwnershipTransferOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    currentOwnerId?: SortOrder
    proposedOwnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    currentOwner?: UserOrderByWithRelationInput
    proposedOwner?: UserOrderByWithRelationInput
  }

  export type OwnershipTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnershipTransferWhereInput | OwnershipTransferWhereInput[]
    OR?: OwnershipTransferWhereInput[]
    NOT?: OwnershipTransferWhereInput | OwnershipTransferWhereInput[]
    groupId?: StringFilter<"OwnershipTransfer"> | string
    currentOwnerId?: StringFilter<"OwnershipTransfer"> | string
    proposedOwnerId?: StringFilter<"OwnershipTransfer"> | string
    status?: EnumOwnershipTransferStatusFilter<"OwnershipTransfer"> | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFilter<"OwnershipTransfer"> | Date | string
    respondedAt?: DateTimeNullableFilter<"OwnershipTransfer"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    currentOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposedOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OwnershipTransferOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    currentOwnerId?: SortOrder
    proposedOwnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    _count?: OwnershipTransferCountOrderByAggregateInput
    _max?: OwnershipTransferMaxOrderByAggregateInput
    _min?: OwnershipTransferMinOrderByAggregateInput
  }

  export type OwnershipTransferScalarWhereWithAggregatesInput = {
    AND?: OwnershipTransferScalarWhereWithAggregatesInput | OwnershipTransferScalarWhereWithAggregatesInput[]
    OR?: OwnershipTransferScalarWhereWithAggregatesInput[]
    NOT?: OwnershipTransferScalarWhereWithAggregatesInput | OwnershipTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OwnershipTransfer"> | string
    groupId?: StringWithAggregatesFilter<"OwnershipTransfer"> | string
    currentOwnerId?: StringWithAggregatesFilter<"OwnershipTransfer"> | string
    proposedOwnerId?: StringWithAggregatesFilter<"OwnershipTransfer"> | string
    status?: EnumOwnershipTransferStatusWithAggregatesFilter<"OwnershipTransfer"> | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeWithAggregatesFilter<"OwnershipTransfer"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"OwnershipTransfer"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutFriendshipsAsUser1Input
    user2: UserCreateNestedOneWithoutFriendshipsAsUser2Input
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupMembershipsInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    creator: UserCreateNestedOneWithoutCreatedExpensesInput
    group?: GroupCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedExpensesNestedInput
    group?: GroupUpdateOneWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseParticipantCreateInput = {
    id?: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutExpenseParticipationsInput
  }

  export type ExpenseParticipantUncheckedCreateInput = {
    id?: string
    expenseId: string
    userId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type ExpenseParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseParticipantCreateManyInput = {
    id?: string
    expenseId: string
    userId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type ExpenseParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SettlementCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    payer: UserCreateNestedOneWithoutSettlementsPaidInput
    receiver: UserCreateNestedOneWithoutSettlementsReceivedInput
    group?: GroupCreateNestedOneWithoutSettlementsInput
  }

  export type SettlementUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    receiverId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutSettlementsPaidNestedInput
    receiver?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
    group?: GroupUpdateOneWithoutSettlementsNestedInput
  }

  export type SettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    receiverId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutActivitiesInput
    group?: GroupCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    actorId: string
    groupId?: string | null
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    group?: GroupUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    actorId: string
    groupId?: string | null
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnershipTransferCreateInput = {
    id?: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutOwnershipTransfersInput
    currentOwner: UserCreateNestedOneWithoutOwnershipTransfersStartedInput
    proposedOwner: UserCreateNestedOneWithoutOwnershipTransfersReceivedInput
  }

  export type OwnershipTransferUncheckedCreateInput = {
    id?: string
    groupId: string
    currentOwnerId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutOwnershipTransfersNestedInput
    currentOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersStartedNestedInput
    proposedOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersReceivedNestedInput
  }

  export type OwnershipTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferCreateManyInput = {
    id?: string
    groupId: string
    currentOwnerId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ExpenseParticipantListRelationFilter = {
    every?: ExpenseParticipantWhereInput
    some?: ExpenseParticipantWhereInput
    none?: ExpenseParticipantWhereInput
  }

  export type SettlementListRelationFilter = {
    every?: SettlementWhereInput
    some?: SettlementWhereInput
    none?: SettlementWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type OwnershipTransferListRelationFilter = {
    every?: OwnershipTransferWhereInput
    some?: OwnershipTransferWhereInput
    none?: OwnershipTransferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnershipTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    profilePhotoUrl?: SortOrder
    authProvider?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    profilePhotoUrl?: SortOrder
    authProvider?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    profilePhotoUrl?: SortOrder
    authProvider?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendshipUser1IdUser2IdCompoundUniqueInput = {
    user1Id: string
    user2Id: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumSplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeFilter<$PrismaModel> | $Enums.SplitType
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    splitType?: SortOrder
    payerId?: SortOrder
    creatorId?: SortOrder
    groupId?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    splitType?: SortOrder
    payerId?: SortOrder
    creatorId?: SortOrder
    groupId?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    splitType?: SortOrder
    payerId?: SortOrder
    creatorId?: SortOrder
    groupId?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.SplitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSplitTypeFilter<$PrismaModel>
    _max?: NestedEnumSplitTypeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseParticipantExpenseIdUserIdCompoundUniqueInput = {
    expenseId: string
    userId: string
  }

  export type ExpenseParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amountOwed?: SortOrder
    percentage?: SortOrder
    shares?: SortOrder
  }

  export type ExpenseParticipantAvgOrderByAggregateInput = {
    amountOwed?: SortOrder
    percentage?: SortOrder
    shares?: SortOrder
  }

  export type ExpenseParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amountOwed?: SortOrder
    percentage?: SortOrder
    shares?: SortOrder
  }

  export type ExpenseParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amountOwed?: SortOrder
    percentage?: SortOrder
    shares?: SortOrder
  }

  export type ExpenseParticipantSumOrderByAggregateInput = {
    amountOwed?: SortOrder
    percentage?: SortOrder
    shares?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SettlementCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    note?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    note?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    note?: SortOrder
    screenshotUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    groupId?: SortOrder
    activityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    groupId?: SortOrder
    activityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    groupId?: SortOrder
    activityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumOwnershipTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipTransferStatus | EnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel> | $Enums.OwnershipTransferStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OwnershipTransferCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    currentOwnerId?: SortOrder
    proposedOwnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type OwnershipTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    currentOwnerId?: SortOrder
    proposedOwnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type OwnershipTransferMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    currentOwnerId?: SortOrder
    proposedOwnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type EnumOwnershipTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipTransferStatus | EnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipTransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput> | ExpenseCreateWithoutCreatorInput[] | ExpenseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatorInput | ExpenseCreateOrConnectWithoutCreatorInput[]
    createMany?: ExpenseCreateManyCreatorInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutPayerInput = {
    create?: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput> | SettlementCreateWithoutPayerInput[] | SettlementUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutPayerInput | SettlementCreateOrConnectWithoutPayerInput[]
    createMany?: SettlementCreateManyPayerInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput> | SettlementCreateWithoutReceiverInput[] | SettlementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutReceiverInput | SettlementCreateOrConnectWithoutReceiverInput[]
    createMany?: SettlementCreateManyReceiverInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutActorInput = {
    create?: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput> | ActivityCreateWithoutActorInput[] | ActivityUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutActorInput | ActivityCreateOrConnectWithoutActorInput[]
    createMany?: ActivityCreateManyActorInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput = {
    create?: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput> | OwnershipTransferCreateWithoutCurrentOwnerInput[] | OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput | OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput[]
    createMany?: OwnershipTransferCreateManyCurrentOwnerInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type OwnershipTransferCreateNestedManyWithoutProposedOwnerInput = {
    create?: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput> | OwnershipTransferCreateWithoutProposedOwnerInput[] | OwnershipTransferUncheckedCreateWithoutProposedOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutProposedOwnerInput | OwnershipTransferCreateOrConnectWithoutProposedOwnerInput[]
    createMany?: OwnershipTransferCreateManyProposedOwnerInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput> | ExpenseCreateWithoutCreatorInput[] | ExpenseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatorInput | ExpenseCreateOrConnectWithoutCreatorInput[]
    createMany?: ExpenseCreateManyCreatorInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput> | SettlementCreateWithoutPayerInput[] | SettlementUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutPayerInput | SettlementCreateOrConnectWithoutPayerInput[]
    createMany?: SettlementCreateManyPayerInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput> | SettlementCreateWithoutReceiverInput[] | SettlementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutReceiverInput | SettlementCreateOrConnectWithoutReceiverInput[]
    createMany?: SettlementCreateManyReceiverInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput> | ActivityCreateWithoutActorInput[] | ActivityUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutActorInput | ActivityCreateOrConnectWithoutActorInput[]
    createMany?: ActivityCreateManyActorInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput = {
    create?: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput> | OwnershipTransferCreateWithoutCurrentOwnerInput[] | OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput | OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput[]
    createMany?: OwnershipTransferCreateManyCurrentOwnerInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput = {
    create?: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput> | OwnershipTransferCreateWithoutProposedOwnerInput[] | OwnershipTransferUncheckedCreateWithoutProposedOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutProposedOwnerInput | OwnershipTransferCreateOrConnectWithoutProposedOwnerInput[]
    createMany?: OwnershipTransferCreateManyProposedOwnerInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput> | ExpenseCreateWithoutCreatorInput[] | ExpenseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatorInput | ExpenseCreateOrConnectWithoutCreatorInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCreatorInput | ExpenseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ExpenseCreateManyCreatorInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCreatorInput | ExpenseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCreatorInput | ExpenseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutPayerNestedInput = {
    create?: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput> | SettlementCreateWithoutPayerInput[] | SettlementUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutPayerInput | SettlementCreateOrConnectWithoutPayerInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutPayerInput | SettlementUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: SettlementCreateManyPayerInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutPayerInput | SettlementUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutPayerInput | SettlementUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput> | SettlementCreateWithoutReceiverInput[] | SettlementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutReceiverInput | SettlementCreateOrConnectWithoutReceiverInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutReceiverInput | SettlementUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SettlementCreateManyReceiverInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutReceiverInput | SettlementUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutReceiverInput | SettlementUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput> | ActivityCreateWithoutActorInput[] | ActivityUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutActorInput | ActivityCreateOrConnectWithoutActorInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutActorInput | ActivityUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActivityCreateManyActorInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutActorInput | ActivityUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutActorInput | ActivityUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput> | OwnershipTransferCreateWithoutCurrentOwnerInput[] | OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput | OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutCurrentOwnerInput | OwnershipTransferUpsertWithWhereUniqueWithoutCurrentOwnerInput[]
    createMany?: OwnershipTransferCreateManyCurrentOwnerInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutCurrentOwnerInput | OwnershipTransferUpdateWithWhereUniqueWithoutCurrentOwnerInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutCurrentOwnerInput | OwnershipTransferUpdateManyWithWhereWithoutCurrentOwnerInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput> | OwnershipTransferCreateWithoutProposedOwnerInput[] | OwnershipTransferUncheckedCreateWithoutProposedOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutProposedOwnerInput | OwnershipTransferCreateOrConnectWithoutProposedOwnerInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutProposedOwnerInput | OwnershipTransferUpsertWithWhereUniqueWithoutProposedOwnerInput[]
    createMany?: OwnershipTransferCreateManyProposedOwnerInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutProposedOwnerInput | OwnershipTransferUpdateWithWhereUniqueWithoutProposedOwnerInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutProposedOwnerInput | OwnershipTransferUpdateManyWithWhereWithoutProposedOwnerInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput> | ExpenseCreateWithoutCreatorInput[] | ExpenseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatorInput | ExpenseCreateOrConnectWithoutCreatorInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCreatorInput | ExpenseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ExpenseCreateManyCreatorInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCreatorInput | ExpenseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCreatorInput | ExpenseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput> | SettlementCreateWithoutPayerInput[] | SettlementUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutPayerInput | SettlementCreateOrConnectWithoutPayerInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutPayerInput | SettlementUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: SettlementCreateManyPayerInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutPayerInput | SettlementUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutPayerInput | SettlementUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput> | SettlementCreateWithoutReceiverInput[] | SettlementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutReceiverInput | SettlementCreateOrConnectWithoutReceiverInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutReceiverInput | SettlementUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SettlementCreateManyReceiverInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutReceiverInput | SettlementUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutReceiverInput | SettlementUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput> | ActivityCreateWithoutActorInput[] | ActivityUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutActorInput | ActivityCreateOrConnectWithoutActorInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutActorInput | ActivityUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActivityCreateManyActorInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutActorInput | ActivityUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutActorInput | ActivityUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput> | OwnershipTransferCreateWithoutCurrentOwnerInput[] | OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput | OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutCurrentOwnerInput | OwnershipTransferUpsertWithWhereUniqueWithoutCurrentOwnerInput[]
    createMany?: OwnershipTransferCreateManyCurrentOwnerInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutCurrentOwnerInput | OwnershipTransferUpdateWithWhereUniqueWithoutCurrentOwnerInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutCurrentOwnerInput | OwnershipTransferUpdateManyWithWhereWithoutCurrentOwnerInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput> | OwnershipTransferCreateWithoutProposedOwnerInput[] | OwnershipTransferUncheckedCreateWithoutProposedOwnerInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutProposedOwnerInput | OwnershipTransferCreateOrConnectWithoutProposedOwnerInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutProposedOwnerInput | OwnershipTransferUpsertWithWhereUniqueWithoutProposedOwnerInput[]
    createMany?: OwnershipTransferCreateManyProposedOwnerInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutProposedOwnerInput | OwnershipTransferUpdateWithWhereUniqueWithoutProposedOwnerInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutProposedOwnerInput | OwnershipTransferUpdateManyWithWhereWithoutProposedOwnerInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendshipsAsUser1Input = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendshipsAsUser2Input = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser1Input
    upsert?: UserUpsertWithoutFriendshipsAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendshipsAsUser1Input, UserUpdateWithoutFriendshipsAsUser1Input>, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser2Input
    upsert?: UserUpsertWithoutFriendshipsAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendshipsAsUser2Input, UserUpdateWithoutFriendshipsAsUser2Input>, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
  }

  export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutGroupInput = {
    create?: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput> | ActivityCreateWithoutGroupInput[] | ActivityUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutGroupInput | ActivityCreateOrConnectWithoutGroupInput[]
    createMany?: ActivityCreateManyGroupInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type OwnershipTransferCreateNestedManyWithoutGroupInput = {
    create?: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput> | OwnershipTransferCreateWithoutGroupInput[] | OwnershipTransferUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutGroupInput | OwnershipTransferCreateOrConnectWithoutGroupInput[]
    createMany?: OwnershipTransferCreateManyGroupInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput> | ActivityCreateWithoutGroupInput[] | ActivityUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutGroupInput | ActivityCreateOrConnectWithoutGroupInput[]
    createMany?: ActivityCreateManyGroupInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput> | OwnershipTransferCreateWithoutGroupInput[] | OwnershipTransferUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutGroupInput | OwnershipTransferCreateOrConnectWithoutGroupInput[]
    createMany?: OwnershipTransferCreateManyGroupInputEnvelope
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    upsert?: UserUpsertWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedGroupsInput, UserUpdateWithoutOwnedGroupsInput>, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput> | ActivityCreateWithoutGroupInput[] | ActivityUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutGroupInput | ActivityCreateOrConnectWithoutGroupInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutGroupInput | ActivityUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ActivityCreateManyGroupInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutGroupInput | ActivityUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutGroupInput | ActivityUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type OwnershipTransferUpdateManyWithoutGroupNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput> | OwnershipTransferCreateWithoutGroupInput[] | OwnershipTransferUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutGroupInput | OwnershipTransferCreateOrConnectWithoutGroupInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutGroupInput | OwnershipTransferUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: OwnershipTransferCreateManyGroupInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutGroupInput | OwnershipTransferUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutGroupInput | OwnershipTransferUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput> | ActivityCreateWithoutGroupInput[] | ActivityUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutGroupInput | ActivityCreateOrConnectWithoutGroupInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutGroupInput | ActivityUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ActivityCreateManyGroupInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutGroupInput | ActivityUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutGroupInput | ActivityUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput> | OwnershipTransferCreateWithoutGroupInput[] | OwnershipTransferUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: OwnershipTransferCreateOrConnectWithoutGroupInput | OwnershipTransferCreateOrConnectWithoutGroupInput[]
    upsert?: OwnershipTransferUpsertWithWhereUniqueWithoutGroupInput | OwnershipTransferUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: OwnershipTransferCreateManyGroupInputEnvelope
    set?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    disconnect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    delete?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    connect?: OwnershipTransferWhereUniqueInput | OwnershipTransferWhereUniqueInput[]
    update?: OwnershipTransferUpdateWithWhereUniqueWithoutGroupInput | OwnershipTransferUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: OwnershipTransferUpdateManyWithWhereWithoutGroupInput | OwnershipTransferUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembershipsInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    upsert?: UserUpsertWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembershipsInput, UserUpdateWithoutGroupMembershipsInput>, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type UserCreateNestedOneWithoutPaidExpensesInput = {
    create?: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaidExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedExpensesInput = {
    create?: XOR<UserCreateWithoutCreatedExpensesInput, UserUncheckedCreateWithoutCreatedExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutExpensesInput = {
    create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
    connect?: GroupWhereUniqueInput
  }

  export type ExpenseParticipantCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumSplitTypeFieldUpdateOperationsInput = {
    set?: $Enums.SplitType
  }

  export type UserUpdateOneRequiredWithoutPaidExpensesNestedInput = {
    create?: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaidExpensesInput
    upsert?: UserUpsertWithoutPaidExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaidExpensesInput, UserUpdateWithoutPaidExpensesInput>, UserUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedExpensesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedExpensesInput, UserUncheckedCreateWithoutCreatedExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExpensesInput
    upsert?: UserUpsertWithoutCreatedExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedExpensesInput, UserUpdateWithoutCreatedExpensesInput>, UserUncheckedUpdateWithoutCreatedExpensesInput>
  }

  export type GroupUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
    upsert?: GroupUpsertWithoutExpensesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutExpensesInput, GroupUpdateWithoutExpensesInput>, GroupUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseParticipantUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpenseParticipationsInput = {
    create?: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    upsert?: ExpenseUpsertWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutParticipantsInput, ExpenseUpdateWithoutParticipantsInput>, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipationsInput
    upsert?: UserUpsertWithoutExpenseParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpenseParticipationsInput, UserUpdateWithoutExpenseParticipationsInput>, UserUncheckedUpdateWithoutExpenseParticipationsInput>
  }

  export type UserCreateNestedOneWithoutSettlementsPaidInput = {
    create?: XOR<UserCreateWithoutSettlementsPaidInput, UserUncheckedCreateWithoutSettlementsPaidInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsPaidInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementsReceivedInput = {
    create?: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSettlementsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettlementsPaidNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsPaidInput, UserUncheckedCreateWithoutSettlementsPaidInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsPaidInput
    upsert?: UserUpsertWithoutSettlementsPaidInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsPaidInput, UserUpdateWithoutSettlementsPaidInput>, UserUncheckedUpdateWithoutSettlementsPaidInput>
  }

  export type UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsReceivedInput
    upsert?: UserUpsertWithoutSettlementsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsReceivedInput, UserUpdateWithoutSettlementsReceivedInput>, UserUncheckedUpdateWithoutSettlementsReceivedInput>
  }

  export type GroupUpdateOneWithoutSettlementsNestedInput = {
    create?: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSettlementsInput
    upsert?: GroupUpsertWithoutSettlementsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutSettlementsInput, GroupUpdateWithoutSettlementsInput>, GroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutActivitiesInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type GroupUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutActivitiesInput
    upsert?: GroupUpsertWithoutActivitiesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutActivitiesInput, GroupUpdateWithoutActivitiesInput>, GroupUncheckedUpdateWithoutActivitiesInput>
  }

  export type GroupCreateNestedOneWithoutOwnershipTransfersInput = {
    create?: XOR<GroupCreateWithoutOwnershipTransfersInput, GroupUncheckedCreateWithoutOwnershipTransfersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutOwnershipTransfersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnershipTransfersStartedInput = {
    create?: XOR<UserCreateWithoutOwnershipTransfersStartedInput, UserUncheckedCreateWithoutOwnershipTransfersStartedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnershipTransfersStartedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnershipTransfersReceivedInput = {
    create?: XOR<UserCreateWithoutOwnershipTransfersReceivedInput, UserUncheckedCreateWithoutOwnershipTransfersReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnershipTransfersReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOwnershipTransferStatusFieldUpdateOperationsInput = {
    set?: $Enums.OwnershipTransferStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GroupUpdateOneRequiredWithoutOwnershipTransfersNestedInput = {
    create?: XOR<GroupCreateWithoutOwnershipTransfersInput, GroupUncheckedCreateWithoutOwnershipTransfersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutOwnershipTransfersInput
    upsert?: GroupUpsertWithoutOwnershipTransfersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutOwnershipTransfersInput, GroupUpdateWithoutOwnershipTransfersInput>, GroupUncheckedUpdateWithoutOwnershipTransfersInput>
  }

  export type UserUpdateOneRequiredWithoutOwnershipTransfersStartedNestedInput = {
    create?: XOR<UserCreateWithoutOwnershipTransfersStartedInput, UserUncheckedCreateWithoutOwnershipTransfersStartedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnershipTransfersStartedInput
    upsert?: UserUpsertWithoutOwnershipTransfersStartedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnershipTransfersStartedInput, UserUpdateWithoutOwnershipTransfersStartedInput>, UserUncheckedUpdateWithoutOwnershipTransfersStartedInput>
  }

  export type UserUpdateOneRequiredWithoutOwnershipTransfersReceivedNestedInput = {
    create?: XOR<UserCreateWithoutOwnershipTransfersReceivedInput, UserUncheckedCreateWithoutOwnershipTransfersReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnershipTransfersReceivedInput
    upsert?: UserUpsertWithoutOwnershipTransfersReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnershipTransfersReceivedInput, UserUpdateWithoutOwnershipTransfersReceivedInput>, UserUncheckedUpdateWithoutOwnershipTransfersReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumSplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeFilter<$PrismaModel> | $Enums.SplitType
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.SplitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSplitTypeFilter<$PrismaModel>
    _max?: NestedEnumSplitTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumOwnershipTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipTransferStatus | EnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel> | $Enums.OwnershipTransferStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOwnershipTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipTransferStatus | EnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipTransferStatus[] | ListEnumOwnershipTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipTransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTransferStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GroupCreateWithoutOwnerInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: GroupCreateManyOwnerInput | GroupCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCreatorInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    group?: GroupCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutCreatorInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutCreatorInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput>
  }

  export type ExpenseCreateManyCreatorInputEnvelope = {
    data: ExpenseCreateManyCreatorInput | ExpenseCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutPayerInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedExpensesInput
    group?: GroupCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutPayerInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    creatorId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseCreateManyPayerInputEnvelope = {
    data: ExpenseCreateManyPayerInput | ExpenseCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseParticipantCreateWithoutUserInput = {
    id?: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    expenseId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type ExpenseParticipantCreateOrConnectWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantCreateManyUserInputEnvelope = {
    data: ExpenseParticipantCreateManyUserInput | ExpenseParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutSettlementsReceivedInput
    group?: GroupCreateNestedOneWithoutSettlementsInput
  }

  export type SettlementUncheckedCreateWithoutPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    receiverId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutPayerInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput>
  }

  export type SettlementCreateManyPayerInputEnvelope = {
    data: SettlementCreateManyPayerInput | SettlementCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    payer: UserCreateNestedOneWithoutSettlementsPaidInput
    group?: GroupCreateNestedOneWithoutSettlementsInput
  }

  export type SettlementUncheckedCreateWithoutReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutReceiverInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput>
  }

  export type SettlementCreateManyReceiverInputEnvelope = {
    data: SettlementCreateManyReceiverInput | SettlementCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutActorInput = {
    id?: string
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group?: GroupCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutActorInput = {
    id?: string
    groupId?: string | null
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutActorInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput>
  }

  export type ActivityCreateManyActorInputEnvelope = {
    data: ActivityCreateManyActorInput | ActivityCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2: UserCreateNestedOneWithoutFriendshipsAsUser2Input
  }

  export type FriendshipUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipCreateManyUser1InputEnvelope = {
    data: FriendshipCreateManyUser1Input | FriendshipCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutFriendshipsAsUser1Input
  }

  export type FriendshipUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipCreateManyUser2InputEnvelope = {
    data: FriendshipCreateManyUser2Input | FriendshipCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type OwnershipTransferCreateWithoutCurrentOwnerInput = {
    id?: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutOwnershipTransfersInput
    proposedOwner: UserCreateNestedOneWithoutOwnershipTransfersReceivedInput
  }

  export type OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput = {
    id?: string
    groupId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferCreateOrConnectWithoutCurrentOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    create: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput>
  }

  export type OwnershipTransferCreateManyCurrentOwnerInputEnvelope = {
    data: OwnershipTransferCreateManyCurrentOwnerInput | OwnershipTransferCreateManyCurrentOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OwnershipTransferCreateWithoutProposedOwnerInput = {
    id?: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutOwnershipTransfersInput
    currentOwner: UserCreateNestedOneWithoutOwnershipTransfersStartedInput
  }

  export type OwnershipTransferUncheckedCreateWithoutProposedOwnerInput = {
    id?: string
    groupId: string
    currentOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferCreateOrConnectWithoutProposedOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    create: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput>
  }

  export type OwnershipTransferCreateManyProposedOwnerInputEnvelope = {
    data: OwnershipTransferCreateManyProposedOwnerInput | OwnershipTransferCreateManyProposedOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    inviteCode?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCreatorInput, ExpenseUncheckedUpdateWithoutCreatorInput>
    create: XOR<ExpenseCreateWithoutCreatorInput, ExpenseUncheckedCreateWithoutCreatorInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCreatorInput, ExpenseUncheckedUpdateWithoutCreatorInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCreatorInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    payerId?: StringFilter<"Expense"> | string
    creatorId?: StringFilter<"Expense"> | string
    groupId?: StringNullableFilter<"Expense"> | string | null
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutPayerInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPayerInput>
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseParticipantScalarWhereInput = {
    AND?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    OR?: ExpenseParticipantScalarWhereInput[]
    NOT?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    id?: StringFilter<"ExpenseParticipant"> | string
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    amountOwed?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalNullableFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string | null
    shares?: IntNullableFilter<"ExpenseParticipant"> | number | null
  }

  export type SettlementUpsertWithWhereUniqueWithoutPayerInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutPayerInput, SettlementUncheckedUpdateWithoutPayerInput>
    create: XOR<SettlementCreateWithoutPayerInput, SettlementUncheckedCreateWithoutPayerInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutPayerInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutPayerInput, SettlementUncheckedUpdateWithoutPayerInput>
  }

  export type SettlementUpdateManyWithWhereWithoutPayerInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutPayerInput>
  }

  export type SettlementScalarWhereInput = {
    AND?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    OR?: SettlementScalarWhereInput[]
    NOT?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    id?: StringFilter<"Settlement"> | string
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    payerId?: StringFilter<"Settlement"> | string
    receiverId?: StringFilter<"Settlement"> | string
    groupId?: StringNullableFilter<"Settlement"> | string | null
    note?: StringNullableFilter<"Settlement"> | string | null
    screenshotUrl?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutReceiverInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutReceiverInput, SettlementUncheckedUpdateWithoutReceiverInput>
    create: XOR<SettlementCreateWithoutReceiverInput, SettlementUncheckedCreateWithoutReceiverInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutReceiverInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutReceiverInput, SettlementUncheckedUpdateWithoutReceiverInput>
  }

  export type SettlementUpdateManyWithWhereWithoutReceiverInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutActorInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutActorInput, ActivityUncheckedUpdateWithoutActorInput>
    create: XOR<ActivityCreateWithoutActorInput, ActivityUncheckedCreateWithoutActorInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutActorInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutActorInput, ActivityUncheckedUpdateWithoutActorInput>
  }

  export type ActivityUpdateManyWithWhereWithoutActorInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutActorInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    actorId?: StringFilter<"Activity"> | string
    groupId?: StringNullableFilter<"Activity"> | string | null
    activityType?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    entityId?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser1Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser1Input>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser2Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser2Input>
  }

  export type OwnershipTransferUpsertWithWhereUniqueWithoutCurrentOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    update: XOR<OwnershipTransferUpdateWithoutCurrentOwnerInput, OwnershipTransferUncheckedUpdateWithoutCurrentOwnerInput>
    create: XOR<OwnershipTransferCreateWithoutCurrentOwnerInput, OwnershipTransferUncheckedCreateWithoutCurrentOwnerInput>
  }

  export type OwnershipTransferUpdateWithWhereUniqueWithoutCurrentOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    data: XOR<OwnershipTransferUpdateWithoutCurrentOwnerInput, OwnershipTransferUncheckedUpdateWithoutCurrentOwnerInput>
  }

  export type OwnershipTransferUpdateManyWithWhereWithoutCurrentOwnerInput = {
    where: OwnershipTransferScalarWhereInput
    data: XOR<OwnershipTransferUpdateManyMutationInput, OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerInput>
  }

  export type OwnershipTransferScalarWhereInput = {
    AND?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
    OR?: OwnershipTransferScalarWhereInput[]
    NOT?: OwnershipTransferScalarWhereInput | OwnershipTransferScalarWhereInput[]
    id?: StringFilter<"OwnershipTransfer"> | string
    groupId?: StringFilter<"OwnershipTransfer"> | string
    currentOwnerId?: StringFilter<"OwnershipTransfer"> | string
    proposedOwnerId?: StringFilter<"OwnershipTransfer"> | string
    status?: EnumOwnershipTransferStatusFilter<"OwnershipTransfer"> | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFilter<"OwnershipTransfer"> | Date | string
    respondedAt?: DateTimeNullableFilter<"OwnershipTransfer"> | Date | string | null
  }

  export type OwnershipTransferUpsertWithWhereUniqueWithoutProposedOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    update: XOR<OwnershipTransferUpdateWithoutProposedOwnerInput, OwnershipTransferUncheckedUpdateWithoutProposedOwnerInput>
    create: XOR<OwnershipTransferCreateWithoutProposedOwnerInput, OwnershipTransferUncheckedCreateWithoutProposedOwnerInput>
  }

  export type OwnershipTransferUpdateWithWhereUniqueWithoutProposedOwnerInput = {
    where: OwnershipTransferWhereUniqueInput
    data: XOR<OwnershipTransferUpdateWithoutProposedOwnerInput, OwnershipTransferUncheckedUpdateWithoutProposedOwnerInput>
  }

  export type OwnershipTransferUpdateManyWithWhereWithoutProposedOwnerInput = {
    where: OwnershipTransferScalarWhereInput
    data: XOR<OwnershipTransferUpdateManyMutationInput, OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerInput>
  }

  export type UserCreateWithoutFriendshipsAsUser1Input = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutFriendshipsAsUser1Input = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutFriendshipsAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
  }

  export type UserCreateWithoutFriendshipsAsUser2Input = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutFriendshipsAsUser2Input = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutFriendshipsAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
  }

  export type UserUpsertWithoutFriendshipsAsUser1Input = {
    update: XOR<UserUpdateWithoutFriendshipsAsUser1Input, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
    create: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendshipsAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendshipsAsUser1Input, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
  }

  export type UserUpdateWithoutFriendshipsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendshipsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUpsertWithoutFriendshipsAsUser2Input = {
    update: XOR<UserUpdateWithoutFriendshipsAsUser2Input, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
    create: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendshipsAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendshipsAsUser2Input, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
  }

  export type UserUpdateWithoutFriendshipsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendshipsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserCreateWithoutOwnedGroupsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembershipsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutGroupInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    creator: UserCreateNestedOneWithoutCreatedExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutGroupInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseCreateManyGroupInputEnvelope = {
    data: ExpenseCreateManyGroupInput | ExpenseCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
    payer: UserCreateNestedOneWithoutSettlementsPaidInput
    receiver: UserCreateNestedOneWithoutSettlementsReceivedInput
  }

  export type SettlementUncheckedCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    receiverId: string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementCreateManyGroupInputEnvelope = {
    data: SettlementCreateManyGroupInput | SettlementCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutGroupInput = {
    id?: string
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutGroupInput = {
    id?: string
    actorId: string
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutGroupInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput>
  }

  export type ActivityCreateManyGroupInputEnvelope = {
    data: ActivityCreateManyGroupInput | ActivityCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type OwnershipTransferCreateWithoutGroupInput = {
    id?: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
    currentOwner: UserCreateNestedOneWithoutOwnershipTransfersStartedInput
    proposedOwner: UserCreateNestedOneWithoutOwnershipTransfersReceivedInput
  }

  export type OwnershipTransferUncheckedCreateWithoutGroupInput = {
    id?: string
    currentOwnerId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferCreateOrConnectWithoutGroupInput = {
    where: OwnershipTransferWhereUniqueInput
    create: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput>
  }

  export type OwnershipTransferCreateManyGroupInputEnvelope = {
    data: OwnershipTransferCreateManyGroupInput | OwnershipTransferCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedGroupsInput = {
    update: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type UserUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutGroupInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutGroupInput>
  }

  export type SettlementUpsertWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
  }

  export type SettlementUpdateManyWithWhereWithoutGroupInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutGroupInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutGroupInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutGroupInput, ActivityUncheckedUpdateWithoutGroupInput>
    create: XOR<ActivityCreateWithoutGroupInput, ActivityUncheckedCreateWithoutGroupInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutGroupInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutGroupInput, ActivityUncheckedUpdateWithoutGroupInput>
  }

  export type ActivityUpdateManyWithWhereWithoutGroupInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutGroupInput>
  }

  export type OwnershipTransferUpsertWithWhereUniqueWithoutGroupInput = {
    where: OwnershipTransferWhereUniqueInput
    update: XOR<OwnershipTransferUpdateWithoutGroupInput, OwnershipTransferUncheckedUpdateWithoutGroupInput>
    create: XOR<OwnershipTransferCreateWithoutGroupInput, OwnershipTransferUncheckedCreateWithoutGroupInput>
  }

  export type OwnershipTransferUpdateWithWhereUniqueWithoutGroupInput = {
    where: OwnershipTransferWhereUniqueInput
    data: XOR<OwnershipTransferUpdateWithoutGroupInput, OwnershipTransferUncheckedUpdateWithoutGroupInput>
  }

  export type OwnershipTransferUpdateManyWithWhereWithoutGroupInput = {
    where: OwnershipTransferScalarWhereInput
    data: XOR<OwnershipTransferUpdateManyMutationInput, OwnershipTransferUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembershipsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutGroupMembershipsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutGroupMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMembershipsInput = {
    update: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type UserUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserCreateWithoutPaidExpensesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutPaidExpensesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutPaidExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
  }

  export type UserCreateWithoutCreatedExpensesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutCreatedExpensesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutCreatedExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedExpensesInput, UserUncheckedCreateWithoutCreatedExpensesInput>
  }

  export type GroupCreateWithoutExpensesInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutExpensesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
  }

  export type ExpenseParticipantCreateWithoutExpenseInput = {
    id?: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
    user: UserCreateNestedOneWithoutExpenseParticipationsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutExpenseInput = {
    id?: string
    userId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type ExpenseParticipantCreateOrConnectWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantCreateManyExpenseInputEnvelope = {
    data: ExpenseParticipantCreateManyExpenseInput | ExpenseParticipantCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaidExpensesInput = {
    update: XOR<UserUpdateWithoutPaidExpensesInput, UserUncheckedUpdateWithoutPaidExpensesInput>
    create: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaidExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaidExpensesInput, UserUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type UserUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUpsertWithoutCreatedExpensesInput = {
    update: XOR<UserUpdateWithoutCreatedExpensesInput, UserUncheckedUpdateWithoutCreatedExpensesInput>
    create: XOR<UserCreateWithoutCreatedExpensesInput, UserUncheckedCreateWithoutCreatedExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedExpensesInput, UserUncheckedUpdateWithoutCreatedExpensesInput>
  }

  export type UserUpdateWithoutCreatedExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type GroupUpsertWithoutExpensesInput = {
    update: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
    create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutExpensesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
  }

  export type GroupUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutParticipantsInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    creator: UserCreateNestedOneWithoutCreatedExpensesInput
    group?: GroupCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutParticipantsInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutParticipantsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutExpenseParticipationsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutExpenseParticipationsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutExpenseParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
  }

  export type ExpenseUpsertWithoutParticipantsInput = {
    update: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type ExpenseUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedExpensesNestedInput
    group?: GroupUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutExpenseParticipationsInput = {
    update: XOR<UserUpdateWithoutExpenseParticipationsInput, UserUncheckedUpdateWithoutExpenseParticipationsInput>
    create: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpenseParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpenseParticipationsInput, UserUncheckedUpdateWithoutExpenseParticipationsInput>
  }

  export type UserUpdateWithoutExpenseParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutExpenseParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserCreateWithoutSettlementsPaidInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutSettlementsPaidInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutSettlementsPaidInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsPaidInput, UserUncheckedCreateWithoutSettlementsPaidInput>
  }

  export type UserCreateWithoutSettlementsReceivedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutSettlementsReceivedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutSettlementsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
  }

  export type GroupCreateWithoutSettlementsInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutSettlementsInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutSettlementsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
  }

  export type UserUpsertWithoutSettlementsPaidInput = {
    update: XOR<UserUpdateWithoutSettlementsPaidInput, UserUncheckedUpdateWithoutSettlementsPaidInput>
    create: XOR<UserCreateWithoutSettlementsPaidInput, UserUncheckedCreateWithoutSettlementsPaidInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsPaidInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsPaidInput, UserUncheckedUpdateWithoutSettlementsPaidInput>
  }

  export type UserUpdateWithoutSettlementsPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUpsertWithoutSettlementsReceivedInput = {
    update: XOR<UserUpdateWithoutSettlementsReceivedInput, UserUncheckedUpdateWithoutSettlementsReceivedInput>
    create: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsReceivedInput, UserUncheckedUpdateWithoutSettlementsReceivedInput>
  }

  export type UserUpdateWithoutSettlementsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type GroupUpsertWithoutSettlementsInput = {
    update: XOR<GroupUpdateWithoutSettlementsInput, GroupUncheckedUpdateWithoutSettlementsInput>
    create: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutSettlementsInput, GroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type GroupUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type GroupCreateWithoutActivitiesInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    ownershipTransfers?: OwnershipTransferUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutActivitiesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type GroupUpsertWithoutActivitiesInput = {
    update: XOR<GroupUpdateWithoutActivitiesInput, GroupUncheckedUpdateWithoutActivitiesInput>
    create: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutActivitiesInput, GroupUncheckedUpdateWithoutActivitiesInput>
  }

  export type GroupUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutOwnershipTransfersInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
    activities?: ActivityCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnershipTransfersInput = {
    id?: string
    name: string
    ownerId: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
    activities?: ActivityUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnershipTransfersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnershipTransfersInput, GroupUncheckedCreateWithoutOwnershipTransfersInput>
  }

  export type UserCreateWithoutOwnershipTransfersStartedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersReceived?: OwnershipTransferCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserUncheckedCreateWithoutOwnershipTransfersStartedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersReceived?: OwnershipTransferUncheckedCreateNestedManyWithoutProposedOwnerInput
  }

  export type UserCreateOrConnectWithoutOwnershipTransfersStartedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnershipTransfersStartedInput, UserUncheckedCreateWithoutOwnershipTransfersStartedInput>
  }

  export type UserCreateWithoutOwnershipTransfersReceivedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementCreateNestedManyWithoutReceiverInput
    activities?: ActivityCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferCreateNestedManyWithoutCurrentOwnerInput
  }

  export type UserUncheckedCreateWithoutOwnershipTransfersReceivedInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    username?: string | null
    profilePhotoUrl?: string | null
    authProvider?: $Enums.AuthProvider
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdExpenses?: ExpenseUncheckedCreateNestedManyWithoutCreatorInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
    settlementsPaid?: SettlementUncheckedCreateNestedManyWithoutPayerInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutReceiverInput
    activities?: ActivityUncheckedCreateNestedManyWithoutActorInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    ownershipTransfersStarted?: OwnershipTransferUncheckedCreateNestedManyWithoutCurrentOwnerInput
  }

  export type UserCreateOrConnectWithoutOwnershipTransfersReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnershipTransfersReceivedInput, UserUncheckedCreateWithoutOwnershipTransfersReceivedInput>
  }

  export type GroupUpsertWithoutOwnershipTransfersInput = {
    update: XOR<GroupUpdateWithoutOwnershipTransfersInput, GroupUncheckedUpdateWithoutOwnershipTransfersInput>
    create: XOR<GroupCreateWithoutOwnershipTransfersInput, GroupUncheckedCreateWithoutOwnershipTransfersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutOwnershipTransfersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutOwnershipTransfersInput, GroupUncheckedUpdateWithoutOwnershipTransfersInput>
  }

  export type GroupUpdateWithoutOwnershipTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnershipTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutOwnershipTransfersStartedInput = {
    update: XOR<UserUpdateWithoutOwnershipTransfersStartedInput, UserUncheckedUpdateWithoutOwnershipTransfersStartedInput>
    create: XOR<UserCreateWithoutOwnershipTransfersStartedInput, UserUncheckedCreateWithoutOwnershipTransfersStartedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnershipTransfersStartedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnershipTransfersStartedInput, UserUncheckedUpdateWithoutOwnershipTransfersStartedInput>
  }

  export type UserUpdateWithoutOwnershipTransfersStartedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersReceived?: OwnershipTransferUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnershipTransfersStartedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersReceived?: OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerNestedInput
  }

  export type UserUpsertWithoutOwnershipTransfersReceivedInput = {
    update: XOR<UserUpdateWithoutOwnershipTransfersReceivedInput, UserUncheckedUpdateWithoutOwnershipTransfersReceivedInput>
    create: XOR<UserCreateWithoutOwnershipTransfersReceivedInput, UserUncheckedCreateWithoutOwnershipTransfersReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnershipTransfersReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnershipTransfersReceivedInput, UserUncheckedUpdateWithoutOwnershipTransfersReceivedInput>
  }

  export type UserUpdateWithoutOwnershipTransfersReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUpdateManyWithoutCurrentOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnershipTransfersReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdExpenses?: ExpenseUncheckedUpdateManyWithoutCreatorNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
    settlementsPaid?: SettlementUncheckedUpdateManyWithoutPayerNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutReceiverNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutActorNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    ownershipTransfersStarted?: OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerNestedInput
  }

  export type GroupCreateManyOwnerInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type ExpenseCreateManyCreatorInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateManyPayerInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    creatorId: string
    groupId?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseParticipantCreateManyUserInput = {
    id?: string
    expenseId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type SettlementCreateManyPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    receiverId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type SettlementCreateManyReceiverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    groupId?: string | null
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type ActivityCreateManyActorInput = {
    id?: string
    groupId?: string | null
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUser1Input = {
    id?: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUser2Input = {
    id?: string
    user1Id: string
    createdAt?: Date | string
  }

  export type OwnershipTransferCreateManyCurrentOwnerInput = {
    id?: string
    groupId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type OwnershipTransferCreateManyProposedOwnerInput = {
    id?: string
    groupId: string
    currentOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
    activities?: ActivityUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutGroupNestedInput
    ownershipTransfers?: OwnershipTransferUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    group?: GroupUpdateOneWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedExpensesNestedInput
    group?: GroupUpdateOneWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    creatorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    creatorId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SettlementUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
    group?: GroupUpdateOneWithoutSettlementsNestedInput
  }

  export type SettlementUncheckedUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiverId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiverId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutSettlementsPaidNestedInput
    group?: GroupUpdateOneWithoutSettlementsNestedInput
  }

  export type SettlementUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnershipTransferUpdateWithoutCurrentOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutOwnershipTransfersNestedInput
    proposedOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersReceivedNestedInput
  }

  export type OwnershipTransferUncheckedUpdateWithoutCurrentOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutCurrentOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferUpdateWithoutProposedOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutOwnershipTransfersNestedInput
    currentOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersStartedNestedInput
  }

  export type OwnershipTransferUncheckedUpdateWithoutProposedOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutProposedOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type ExpenseCreateManyGroupInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    splitType: $Enums.SplitType
    payerId: string
    creatorId: string
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementCreateManyGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payerId: string
    receiverId: string
    note?: string | null
    screenshotUrl?: string | null
    createdAt?: Date | string
  }

  export type ActivityCreateManyGroupInput = {
    id?: string
    actorId: string
    activityType: $Enums.ActivityType
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OwnershipTransferCreateManyGroupInput = {
    id?: string
    currentOwnerId: string
    proposedOwnerId: string
    status?: $Enums.OwnershipTransferStatus
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    payerId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutSettlementsPaidNestedInput
    receiver?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
  }

  export type SettlementUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnershipTransferUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersStartedNestedInput
    proposedOwner?: UserUpdateOneRequiredWithoutOwnershipTransfersReceivedNestedInput
  }

  export type OwnershipTransferUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipTransferUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOwnerId?: StringFieldUpdateOperationsInput | string
    proposedOwnerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOwnershipTransferStatusFieldUpdateOperationsInput | $Enums.OwnershipTransferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseParticipantCreateManyExpenseInput = {
    id?: string
    userId: string
    amountOwed: Decimal | DecimalJsLike | number | string
    percentage?: Decimal | DecimalJsLike | number | string | null
    shares?: number | null
  }

  export type ExpenseParticipantUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountOwed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}