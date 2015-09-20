<!doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="baseUrl" value="${pageContext.request.contextPath}/" scope="request"/>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>${title}</title>

        <jsp:include page="../core/angular/angular_styles.jsp">
            <jsp:param name="baseUrl" value="${baseUrl}"/>
        </jsp:include>

        <link rel="stylesheet" href="${baseUrl}resources/mock_rp_config/css/mock_rp_config.css">
        <link rel="stylesheet" href="${baseUrl}resources/mock_rp/css/mock_rp.css">

    </head>
    <body ng-app="mock_rp_config">

        <script>
            var baseUrl = "${baseUrl}";
            var parameters = ${parameters};
        </script>

        <jsp:include page="../core/angular/angular_scripts.jsp">
            <jsp:param name="baseUrl" value="${baseUrl}"/>
        </jsp:include>
        <jsp:include page="mock_rp_config_scripts.jsp">
            <jsp:param name="baseUrl" value="${baseUrl}"/>
        </jsp:include>
        <jsp:include page="../mock_rp/mock_rp_scripts.jsp">
            <jsp:param name="baseUrl" value="${baseUrl}"/>
        </jsp:include>

        <div ng-include src="'${baseUrl}resources/mock_rp_config/html/mock_rp_config.html'"></div>
    </body>
</html>