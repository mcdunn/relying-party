package com.markcdunn.mock_rp;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping(value = "/MockRP")
public class MockRPUIController {

    private static final Logger log = LoggerFactory.getLogger(MockRPUIController.class);

    private final String page = "/WEB-INF/jsp/mock_rp/mock_rp.jsp";

    /**
     * Processes GET requests to access the MockRP Page.
     *
     * @return ModelAndView for the MockRP Page
     */
    @RequestMapping(value = "", method = RequestMethod.GET, produces="text/html")
    public ModelAndView showPage(HttpServletRequest request, @RequestParam Map<String, String> parameters, ModelMap modelMap) {
        try {
            modelMap.put("parameters", new ObjectMapper().writer().writeValueAsString(parameters));
        }
        catch (Exception e) {
            modelMap.put("parameters", "{}");
        }
        return new ModelAndView(page, modelMap);
    }
}
