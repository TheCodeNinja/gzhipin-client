/* 包含n个工具函數的模块 */

/*
用戶主界面路由
	findJob: /jobseeker
	recruit: /boss
用戶信息完善界面路由
	findJob: /jobseekerinfo
	recruit: /bossinfo

判斷是否已經完善信息? user.header是否有值
判斷用戶類型: user.type
*/
// 返回对应的路由路徑
export function getRedirectTo(type, header) {
    let path

    if (type === 'recruit') {
        path = '/boss'
    }
    else {
        path = '/jobseeker'
    }

    if (!header) {
        path += 'info'
    }

    return path
}