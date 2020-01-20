import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IssueStatus } from '@app/domain/issues/issues.dto'

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  status: IssueStatus
}
