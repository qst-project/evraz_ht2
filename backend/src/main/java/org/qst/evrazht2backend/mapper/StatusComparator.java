package org.qst.evrazht2backend.mapper;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class StatusComparator implements Comparator<String> {
    @Override
    public int compare(String lhs, String rhs) {
        List<String> order = new java.util.ArrayList<>(List.of("warn", "alarm"));
        return order.indexOf(lhs) - order.indexOf(rhs);
    }

    public static String coalesce(String... strings) {
        List<String> stringList = new ArrayList<>();
        for (int i = 0; i < strings.length; i++) {
            if (strings[i] != null) {
                stringList.add(strings[i]);
            }
        }
        return stringList.stream().max(new StatusComparator()).orElse(null);
    }
}
