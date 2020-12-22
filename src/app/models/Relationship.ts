export class Relationship {
  userOneId: number
  userTwoId: number
  status: number
  actionUserId: number

  constructor(userOneId: number, userTwoId: number, status: number, actionUserId: number) {
    this.userOneId = userOneId;
    this.userTwoId = userTwoId;
    this.status = status;
    this.actionUserId = actionUserId;
  }
}