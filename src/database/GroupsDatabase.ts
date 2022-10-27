import { Group, IGroupDB } from "../models/Groups";
import { BaseDatabase } from "./BaseDatabase";

export class GroupsDatabase extends BaseDatabase {
  public static TABLE_GROUPS = "Projeto_Bolao_Groups";

  public toGroupDBModel = (group: Group): IGroupDB => {
    const groupDB: IGroupDB = {
      id: group.getId(),
      groupsname: group.getGroupsname(),
      description: group.getDescription(),
      user_id: group.getUser_id(),
    };

    return groupDB;
  };

  public fetchAllGroups = async (): Promise<IGroupDB | undefined> => {
    const result: IGroupDB[] = await this.getConnection().raw(`
        SELECT * FROM ${GroupsDatabase.TABLE_GROUPS}
    `);

    return result[0];
  };

  //Método para buscar os grupos pelo nome
  public async fetchGroupByName(search: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${GroupsDatabase.TABLE_GROUPS} WHERE groupsname LIKE '%${search}%'
    `);
    return result[0];
  }

  public findById = async (id: string): Promise<IGroupDB | undefined> => {
    const result: IGroupDB[] = await this.getConnection()(
      GroupsDatabase.TABLE_GROUPS
    )
      .select()
      .where({ id });

    return result[0];
  };

  public createGroup = async (group: Group): Promise<void> => {
    const groupDB = this.toGroupDBModel(group);

    await this.getConnection()(GroupsDatabase.TABLE_GROUPS).insert(groupDB);
  };

  public deleteGroup = async (delGroup: string): Promise<void> => {
    console.log("Estou dentro do GroupsDatabase => user_id: ",delGroup)
    await this.getConnection()(GroupsDatabase.TABLE_GROUPS)
    .delete()
    .where({user_id: delGroup})
  }
}
