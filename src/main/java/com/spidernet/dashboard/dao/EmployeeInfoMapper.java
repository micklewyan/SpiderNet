package com.spidernet.dashboard.dao;

import java.util.List;

import com.spidernet.dashboard.entity.EmployeeInfo;
import com.spidernet.dashboard.entity.PageCondition;
import com.spidernet.dashboard.entity.TrainingInfo;

public interface EmployeeInfoMapper
{
    
    List<EmployeeInfo> queryEmpInfo(PageCondition pageCondition);
    
    int countPage(PageCondition pageCondition);

    List<EmployeeInfo> queryEmpList(String trainingId);
    
    List<TrainingInfo> queryEmpTrainingInfo(String erId);

	int updateEmpTrainingInfo(String ername, String trname);

	int deleteEmpTrainingInfo(String ername, String trname);

}
