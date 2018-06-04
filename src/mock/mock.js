import Mock from 'mockjs';

Mock.mock(/\/admin-ws\/jugo_api\/mpcApp\/getList/, {
	'code': 0,
    'data': {
		'list|1-10': [{
            'id|+1': 1,
            'title': '前端人人@id',
            'status': 1
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});