import { ResponseRequestsType } from '../../types/response-requests'
import { get } from './requests-methods'


export class Requests {
    async getAllTeams(): Promise<ResponseRequestsType> {
        const result = await get({ url: '/teams/get-all' })
        return {
            data: result.data,
            success: result.status >= 200 && result.status <= 299,
            status: result.status
        }
    }
}
