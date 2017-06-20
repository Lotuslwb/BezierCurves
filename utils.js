/*
 *  传入数组,进行连线
 * */

function linePoint(ctx, PointList) {
    if (!ctx || !PointList.length) {
        return false;
    }
    ctx.beginPath();
    for (var i = 0; i < PointList.length; i++) {
        var point = PointList[i];

        if (i == 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    }
    ctx.stroke();
    ctx.closePath();
}


/*
 * 绘制点,并且在画板上显示点的名字和坐标
 * */

function fillPoint(ctx, point) {
    if (!ctx || !point) {
        return false;
    }
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.font = "36px";
    if (point.name) {
        ctx.fillText(point.name + '(' + point.x + ',' + point.y + ')', point.x + 10, point.y);
    }
    ctx.closePath();
}

/*
 *  在线段P0P1 上找到点TP, 使P0TP:P0P1=t, 并绘制出来然后返回点
 * */

function getTPoint(myCtx, P0, P1, t, option) {
    var needFill = true, name = '';

    if (option) {
        needFill = typeof option.needFill == 'boolean' ? option.needFill : true;
        name = option.name || '';
    }

    var TP = {
        name: name,
        x: P0.x + (P1.x - P0.x) * t,
        y: P0.y + (P1.y - P0.y) * t,
    }
    if (needFill) {
        fillPoint(myCtx, TP);
    }

    return TP;
}
