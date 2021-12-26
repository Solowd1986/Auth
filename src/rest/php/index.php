<?php

//sleep(3);
//header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
//die();

require_once "./php/functions/functions.php";
require_once "./php/db/RequestHandler.php";
use php\db\RequestHandler as Request;

//  /src/rest/php/index.php/api/category/phones

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    preg_match("/api\/(?P<path>[\w\d\/]+)$/", trim(filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL)), $uri);
    try {
        if (preg_match("/^index$/", $uri["path"])) {
            print json_encode(Request::getIndexPageData());

        } elseif (preg_match("/^category\/(?P<category>[a-z]+)$/", $uri["path"], $matches)) {
            print json_encode(Request::getCategoryItems($matches["category"]));

        } elseif (preg_match("/^product\/(?P<category>[a-z]+)\/(?P<id>[0-9]+)$/", $uri["path"], $matches)) {
            print json_encode(Request::getOneItem($matches["id"], $matches["category"]));

        } elseif (preg_match("/^lazy\/(?P<category>[a-z]+)\/(?P<index>[0-9-]+)$/", $uri["path"], $matches)) {
            print json_encode(Request::getLazyLoadItems($matches["category"], $matches["index"]));

        } elseif (preg_match("/^token$/", $uri["path"])) {
            //sleep(12);
            //http_response_code(404);
            //die();

            //throw new Error("Code 401");
            print json_encode("from token");
        } elseif (preg_match("/^check$/", $uri["path"])) {
            //sleep(12);
            //http_response_code(404);
            //die();
            //throw new Error("Code 401");
            print json_encode("check connection");
        } else {
            throw new Error("Page with this parameters not exist");
        }
    } catch (\Error $e) {
        print http_response_code(404);
    }
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    preg_match("/api\/(?P<path>[\w\d\/]+)$/", trim(filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL)), $uri);
    try {

        if (preg_match("/^token$/", $uri["path"])) {
            print json_encode([
                "formdata" => $_POST,
                "token" => 12465756757
            ]);

        } elseif (preg_match("/^reg/", $uri["path"])) {
            print json_encode([
                "type" => "register",
                "reg_data" => $_POST,
            ]);

        } elseif (preg_match("/^auth/", $uri["path"])) {
            print json_encode([
                "type" => "auth",
                "auth_data" => $_POST,
            ]);

        } else {
            throw new Error("Page with this parametres not exist");
        }
    } catch (\Error $e) {
        print http_response_code(404);
    }
}
