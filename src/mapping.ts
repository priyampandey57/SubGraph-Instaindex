import {
  LogAccountCreated as LogAccountCreatedEvent,
} from "../generated/InstaIndex/InstaIndex"
import {
  LogAccountCreated,
} from "../generated/schema"

export function handleLogAccountCreated(event: LogAccountCreatedEvent): void {
  let entity = new LogAccountCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.account = event.params.account
  entity.origin = event.params.origin
  entity.save()
}

// export function handleLogNewAccount(event: LogNewAccountEvent): void {
//   let entity = new LogNewAccount(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity._newAccount = event.params._newAccount
//   entity._connectors = event.params._connectors
//   entity._check = event.params._check
//   entity.save()
// }

// export function handleLogNewCheck(event: LogNewCheckEvent): void {
//   let entity = new LogNewCheck(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.accountVersion = event.params.accountVersion
//   entity.check = event.params.check
//   entity.save()
// }

// export function handleLogNewMaster(event: LogNewMasterEvent): void {
//   let entity = new LogNewMaster(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.master = event.params.master
//   entity.save()
// }

// export function handleLogUpdateMaster(event: LogUpdateMasterEvent): void {
//   let entity = new LogUpdateMaster(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.master = event.params.master
//   entity.save()
// }
