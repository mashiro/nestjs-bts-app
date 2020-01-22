import { IssueStatus } from '@app/domain/issues/issues.type'
import { Project } from '@app/infra/database/entities/projects.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'issues' })
export class Issue {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column({ type: 'bigint', name: 'project_id' })
  projectId: number

  @ManyToOne(
    type => Project,
    project => project.issues
  )
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'status' })
  status: IssueStatus

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
