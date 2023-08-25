def success(data={}, msg="Muvaffaqiyatli"):
    return {
        'success': True,
        'data': data,
        'msg': msg
    }


def fail(errors=[], msg="Muvaffaqiyatsiz"):
    return {
        'success': False,
        'errors': errors,
        'msg': msg
    }
